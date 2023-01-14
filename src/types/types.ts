import { ReactElement, ReactNode } from 'react'
import { CardTypeColor } from './enums'

export interface IList<T> {
	arr: T[]
	render: (item: T) => ReactNode | ReactElement
}

export interface ICardType {
	text: string | number
	color: CardTypeColor
}

type textOption = string

export interface IDropdown {
	options: textOption[]
	selected: textOption | null | undefined
	setSelected: (item: textOption) => void
	defaultOption: textOption
}

export interface IInputDate {
	date: string
	setDate: (date: string) => void
}

export interface IInputDateHint {
	hint: string
	date: string
	setDate: (date: string) => void
}

export interface IButton {
	onClick: () => void
	children: ReactNode
}

export interface ITable {
	titles: string[]
	children: ReactNode
}
