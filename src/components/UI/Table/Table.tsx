import { FC } from 'react'
import { ITable } from '../../../types/types'

const Table: FC<ITable> = ({ children, titles }) => {
	return (
		<div className='table'>
			<ul className='titles'>
				{titles.map(title => (
					<li key={title}>{title}</li>
				))}
			</ul>
			<div className='children'>{children}</div>
		</div>
	)
}

export default Table
