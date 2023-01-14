import { FC } from 'react'
import { IInputDateHint } from '../../types/types'
import InputDate from '../InputDate/InputDate'

const InputDateHint: FC<IInputDateHint> = ({ hint, setDate, date }) => {
	return (
		<label className='label_date'>
			<span className='hint'>{hint}</span>
			<InputDate date={date} setDate={setDate} />
		</label>
	)
}

export default InputDateHint
