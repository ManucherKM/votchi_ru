import { FC, ChangeEvent } from 'react'

interface IInput {
	onChange: (val: string) => void
	type: string
	placeholder: string
}

const Input: FC<IInput> = ({ onChange, type, placeholder }) => {
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		onChange(e.target.value)
	}

	return (
		<input
			className='input'
			onChange={changeHandler}
			type={type}
			placeholder={placeholder}
		/>
	)
}

export default Input
