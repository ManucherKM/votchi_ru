import { Route, Routes } from 'react-router'
import Table from './pages/Table'

const App = () => {
	return (
		<Routes>
			<Route path='/table' element={<Table />} />
		</Routes>
	)
}

export default App
