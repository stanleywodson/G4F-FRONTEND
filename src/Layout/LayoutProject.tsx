import { PropsWithChildren } from "react"
import { Logo } from "../assets/svg/Logo"
import { Link, useLocation } from "react-router-dom"

interface SubTitleProp {
	subtitle?: string
}

const LayoutProject = ({ children, subtitle }: PropsWithChildren<SubTitleProp>) => {
	const location = useLocation();
	return (
		<main>
			<nav className="fixed w-full top-0 z-50 h-20 bg-[#302B63]  border-gray-100">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center h-20 font-medium">
						<Logo />
						<ul className="flex gap-6 text-xl">
							<li className={location.pathname === '/' ? 'text-[#29E0A9] font-bold hover:text-[#6ddfbb]' : 'text-[#F7F7FA] hover:text-zinc-200'}>
								<Link to="/">Cep</Link>
							</li>
							<li className={location.pathname === '/noticias' ? 'text-[#29E0A9] font-bold hover:text-[#6ddfbb]' : 'text-[#F7F7FA] hover:text-zinc-200'}>
								<Link to="/noticias">Notícias</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="text-zinc-400 text-3xl ml-10 mt-4 font-medium">
					<p>{subtitle}</p>
				</div>
			</nav>
			{children}
		</main>
	)
}

export default LayoutProject