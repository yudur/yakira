import { RoutesComponent } from './routes/index.routes'
import { GlobalStyle } from './global/styles/globals'

import { HomePage } from './pages/Home'

import './config/i18next'

export default function App() {
	return (
		<>
			<HomePage />
			<GlobalStyle />
		</>
	)
}
