import { useRef, useState } from 'react'
import Dropdown from '../components/Dropdown/Dropdown'

const Table = () => {
	const [selected, setSelected] = useState('')

	return (
		<div>
			<Dropdown
				// setSelected={}
				defaultOption='Выбрать'
				selected={selected}
				options={['one', 'two']}
			/>
		</div>
	)
}

export default Table
