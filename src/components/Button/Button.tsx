import { FC } from 'react'
import { IButton } from '../../types/types'

const Button: FC<IButton> = ({ onClick, children }) => {
	function clickHandler() {
		onClick()
	}

	return (
		<button className='button' onClick={clickHandler}>
			{children}
		</button>
	)
}

export default Button
