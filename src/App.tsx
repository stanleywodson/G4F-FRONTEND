import { ImageCep } from "./assets/svg/ImageCep"
import { Search } from "./assets/svg/Search"
import { Input } from "./components/Input"

function App() {
	return (
		<div className="flex items-center h-screen bg-gradient-to-tr from-[#302B63] to-[#24243E]">
			<div className="flex flex-col items-center w-auto mx-auto"> 
				{/* search cep */}
					<div className="relative min-w-[600px]">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<Search />
						</div>
						<Input type="text"
							className="block w-full sm:max-w-xl ps-12  text-[#F7F7FA] border-2 border-[#29E0A9] bg-[#302B63] rounded-full focus:ring-blue-500focus:border-blue-500"
							placeholder="Digite seu CEP..."
						//    value={search}
						//    onChange={(e) => setSearch(e.target.value)}
						/>
					</div>

				{/* inputs logradouros */}
				<div className="flex mt-10 gap-6">
					<div className="flex justify-center min-w-96 flex-col gap-6">
						<Input
							type="text"
							placeholder="Cidade"
							className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm"
						/>
						<Input
							type="text"
							placeholder="Bairro"
							className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm"
						/>
						<Input
							type="text"
							placeholder="Logradouro"
							className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm"
						/>
						<Input
							type="text"
							placeholder="Complemento"
							className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm"
						/>
					</div>
					<div className="flex-1 p-2">
						<ImageCep />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
