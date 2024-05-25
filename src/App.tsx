import { Search } from "lucide-react"
import { InputControl, InputPrefix, InputRoot } from "./components/Input2"
import { ImageCep } from "./assets/svg/ImageCep"
import { Input } from "./components/Input"

function App() {
	return (
		<div className="flex items-center h-screen bg-gradient-to-tr from-[#302B63] to-[#24243E]">
			<div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* search cep */}
				<div className="min-w-[600px]">
					<InputRoot>
						<InputPrefix>
							<Search className="h-6 w-6 text-[#F7F7FA]" />
						</InputPrefix>
						<InputControl placeholder="Digite seu CEP" />
					</InputRoot>
				</div>

				{/* inputs logradouros */}
				<div className="flex mt-14 justify-between">
					<div className="flex justify-end min-w-80 flex-col gap-6 mb-6">
						<Input label="Cidade" className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm" />
						<Input label="Bairro" className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm" />
						<Input label="Logradouro" className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm" />
						<Input label="Complemento" className="bg-[#302B63] border-2 border-[#9956F6] shadow-sm" />
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
