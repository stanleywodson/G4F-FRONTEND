import { PropsWithChildren } from "react"
import { Logo } from "../assets/svg/Logo"

const LayoutProject = ({ children }: PropsWithChildren) => {
	return (
		<main>
			<nav className="fixed w-full top-0 z-50 h-20 bg-[#302B63]  border-gray-100">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center h-20 font-medium">
						<Logo />
						<div className="flex gap-6 text-xl">
							<a className="text-[#F7F7FA] hover:text-zinc-200" href="">Cep</a>
							<a className="text-[#F7F7FA] hover:text-zinc-200" href="">Noticias</a>
						</div>
					</div>
				</div>
			</nav>
			{children}
		</main>
	)
}

export default LayoutProject