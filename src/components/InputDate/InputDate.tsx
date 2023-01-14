import { FC, ChangeEvent } from 'react'
import { IInputDate } from '../../types/types'

const InputDate: FC<IInputDate> = ({ date, setDate }) => {
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		setDate(e.target.value)
	}

	return (
		<input
			className='input_date'
			onChange={changeHandler}
			type='date'
			value={date}
		/>
	)
}

export default InputDate
