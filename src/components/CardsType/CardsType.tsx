import { useRef } from 'react'
import { CardTypeColor } from '../../types/enums'
import CardType from '../CardType/CardType'
import List from '../List/List'

const CardsType = () => {
	const cards = useRef([
		{ text: 'Только транзакции', color: CardTypeColor.red },
		{ text: 'Только wialon', color: CardTypeColor.blue },
		{ text: 'Погрешность > 10%', color: CardTypeColor.orange },
		{ text: 'Погрешность 5% - 10%', color: CardTypeColor.green_white },
		{ text: 'Погрешность < 5%', color: CardTypeColor.green },
	])

	return (
		<div className='cards_type'>
			<List
				arr={cards.current}
				render={item => (
					<CardType key={item.text} text={item.text} color={item.color} />
				)}
			/>
		</div>
	)
}

export default CardsType
