import { FC, useState } from 'react'
import { IDropdown } from '../../types/types'
import List from '../List/List'

const Dropdown: FC<IDropdown> = ({
	options,
	selected,
	setSelected,
	defaultOption,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	function regulationMenu() {
		setIsOpen(prev => !prev)
	}

	function updateSelected(newSelected: string) {
		setIsOpen(false)
		setSelected(newSelected)
	}

	const textSelected = selected ? selected : defaultOption

	return (
		<div className='custom_select'>
			<div onClick={regulationMenu} className='wrapper_selected'>
				<p className='selected'>{textSelected}</p>
			</div>
			{isOpen && (
				<div className='menu'>
					<div onClick={() => updateSelected(defaultOption)} className='option'>
						<span>{defaultOption}</span>
					</div>
					<List
						arr={options}
						render={item => (
							<div
								onClick={() => updateSelected(item)}
								className='option'
								key={item}
							>
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
