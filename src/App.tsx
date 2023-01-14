import { Route, Routes } from 'react-router'
import TablePage from './pages/TablePage/TablePage'

const App = () => {
	return (
		<Routes>
			<Route path='/table' element={<TablePage />} />
		</Routes>
	)
}

export default App
