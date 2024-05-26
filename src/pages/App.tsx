import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cep } from "./Cep"
import { News } from "./News"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Cep />} />
				<Route path="/noticias" element={<News />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
