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
