import { FC, useState } from 'react'
import List from '../List/List'

type textOption = string | number

interface IDropdown {
	options: textOption[]
	selected: textOption | null | undefined
	setSelected: (item: textOption) => void
	defaultOption: textOption
}

const Dropdown: FC<IDropdown> = ({
	options,
	selected,
	setSelected,
	defaultOption,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	return (
		<div className='custom_select'>
			<span>{selected ? selected : defaultOption}</span>
			{isOpen && (
				<div className='menu'>
					<div className='option'>
						<span>{defaultOption}</span>
					</div>
					<List
						arr={options}
						render={item => (
							<div className='option' key={item}>
								<span>{item}</span>
							</div>
						)}
					/>
				</div>
			)}
		</div>
	)
}

export default Dropdown
