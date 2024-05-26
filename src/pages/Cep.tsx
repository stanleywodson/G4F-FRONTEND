import { ImageCep } from "../assets/svg/ImageCep";
import { Search } from "../assets/svg/Search";
import { Input } from "../components/Input";
import { useCep } from "../hooks/useCep";
import LayoutProject from "../layout/LayoutProject";

export function Cep() {
	const { register, errors } = useCep()

	return (
		<LayoutProject subtitle="Consultar Cep">
			<div className="flex items-center h-screen bg-gradient-to-tr from-[#302B63] to-[#24243E]">
				<div className="flex flex-col items-center w-auto mx-auto">
					{/* search cep */}
					<div className="relative min-w-[600px]">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<Search />
						</div>
						<Input type="text"
							className="block w-full ps-12 text-[#F7F7FA] border-2 border-[#29E0A9] bg-[#302B63] rounded-full"
							placeholder="Digite seu CEP..."
							{...register('address.zipCode')}
							helperText={`${errors.address?.zipCode ? errors.address?.zipCode.message : ''}`}
						/>
					</div>

					{/* inputs logradouros */}
					<div className="flex mt-10 gap-6">
						<div className="flex justify-center min-w-96 flex-col gap-6">
							<Input
								label="Cidade"
								type="text"
								// placeholder="Cidade"
								className="bg-[#302B63] border-2 border-[#9956F6]"
								{...register('address.city')}
								helperText={`${errors.address?.city ? errors.address?.city.message : ''}`}
							/>
							<Input
								label="Bairro"
								type="text"
								placeholder="Bairro"
								className="bg-[#302B63] border-2 border-[#9956F6]"
								{...register('address.district')}
								helperText={`${errors.address?.district ? errors.address?.district.message : ''}`}
							/>
							<Input
								label="Logradouro"
								type="text"
								placeholder="Logradouro"
								className="bg-[#302B63] border-2 border-[#9956F6]"
								{...register('address.street')}
								helperText={`${errors.address?.street ? errors.address?.street.message : ''}`}
							/>
							<Input
								label="Complemento"
								type="text"
								// placeholder="Complemento"
								className="bg-[#302B63] border-2 border-[#9956F6]"
								{...register('address.complement')}
								helperText={`${errors.address?.complement ? errors.address?.complement.message : ''}`}
							/>
						</div>
						<div className="flex-1 p-2">
							<ImageCep />
						</div>
					</div>
				</div>
			</div>
		</LayoutProject>

	)
}