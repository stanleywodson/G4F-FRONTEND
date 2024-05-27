interface CardNewsProps {
	title: string
	content: string
	deleteItem?: () => void
	editItem?: () => void
}
export function CardNews({title, content, deleteItem, editItem }: CardNewsProps) {
	return (
		<div className="p-6 border w-2/3 rounded-lg shadow bg-gray-700 border-gray-700 mb-4">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
			<div className="space-x-2 text-right">
				<button 
				className="inline-flex items-center px-4 py-2  bg-gray-800 border  border-gray-500 rounded-md font-semibold text-xs  text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
				onClick={deleteItem}
				>deletar</button>
				<button 
				className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs  text-gray-800 uppercase tracking-widest  hover:bg-white  focus:bg-white  active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition ease-in-out duration-150"
				onClick={editItem}
				>editar</button>
			</div>
		</div>
	)
}