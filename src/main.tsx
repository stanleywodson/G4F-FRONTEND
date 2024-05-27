import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='bg-gradient-to-tr from-[#302B63] to-[#24243E]'>
			<App />
		</div>
	</React.StrictMode>,
)
