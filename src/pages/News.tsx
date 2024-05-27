import React, { SetStateAction, useState } from "react";
import { CardNews } from "../components/CardNews";
import { Input } from "../components/Input";
import LayoutProject from "../layout/LayoutProject";
import { v4 as uuidv4 } from 'uuid'
import { contents } from "../mocks/news";

export function News() {
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [error, setError] = useState({ titleMessage: '', contentMessage: '' })
   const [newContent, setNewContent] = useState(contents)
   const [idEdit, setIdEdit] = useState('')

   const onChangeTitle = (event: { target: { value: SetStateAction<string>; }; }) => {
      setError({ ...error, titleMessage: '' })
      setTitle(event?.target.value)
   }

   const onChangeContent = (event: { target: { value: SetStateAction<string>; }; }) => {
      setError({ ...error, contentMessage: '' })
      setContent(event?.target.value)
   }

   const updateContent = () => {
      setNewContent((prevContents) =>
         prevContents.map((item) =>
            item.id === idEdit
               ? { ...item, title, content }
               : item
         )
      )
      setIdEdit('')
   }

   const handleContent = () => {

      if (title.trim() === '')
         setError((prevError) => ({
            ...prevError,
            titleMessage: 'Preencha o titulo de forma correta!'
         }))

      if (content.trim() === '')
         setError((prevError) => ({
            ...prevError,
            contentMessage: 'Preencha o conteúdo de forma correta!'
         }))

      if (!title || !content) return

      //update
      if (idEdit) {
         updateContent()
      } else {
         //insert
         const id = uuidv4()
         setNewContent([...newContent, { id, title, content }])
      }

      setError({ titleMessage: '', contentMessage: '' })
      setTitle('')
      setContent('')
   }

   const deleteContent = (id: string) => {
      const deleteContent = newContent.filter((item) => {
         return item.id !== id
      })
      setNewContent(deleteContent)
      setTitle('')
      setContent('')
   }

   const editContent = (id: string) => {

      const findContent = newContent.filter((item) => {
         return item.id === id
      })
      setTitle(findContent[0].title)
      setContent(findContent[0].content)
      setIdEdit(id)
   }


   return (
      <LayoutProject subtitle="Notícias">
         <div className="flex">
            <div className="flex flex-col overflow-hidden mt-40 w-full gap-6 items-center mx-auto">
               <div className="w-2/3 ">
                  <Input
                     label="Título"
                     type="text"
                     className="rounded-lg w-1/2  text-lg bg-[#302B63] border-2 border-[#9956F6]"
                     value={title}
                     onChange={onChangeTitle}
                  />
                  {error?.titleMessage && <p className="text-red-600 mb-2 h-4">{error?.titleMessage}</p>}
                  <div className="space-y-2">
                     <label className="text-zinc-400 text-sm mr-10 uppercase" htmlFor="content">conteúdo</label>
                     <textarea
                        className="rounded-lg w-full ps-3 pt-2 h-60 text-zinc-300 text-lg outline-none bg-[#302B63] border-2 border-[#9956F6]"
                        name="content"
                        value={content}
                        onChange={onChangeContent}
                     ></textarea>
                     {error?.contentMessage && <p className="text-red-600 mb-2 h-4">{error?.contentMessage}</p>}
                  </div>
                  <div className="text-right mt-2 border-b pb-6 border-[#454569]">
                     <button
				className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs  text-gray-800 uppercase tracking-widest  hover:bg-white  focus:bg-white  active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition ease-in-out duration-150"
                        
                        onClick={handleContent}
                     >
                        Salvar
                     </button>
                  </div>
               </div>
               {React.Children.toArray(
                  newContent.map(({ id, title, content }) => (
                     <CardNews
                        title={title}
                        content={content}
                        deleteItem={() => deleteContent(id)}
                        editItem={() => editContent(id)}
                     />
                  ))
               )}
            </div>
         </div>
      </LayoutProject>
   )
}