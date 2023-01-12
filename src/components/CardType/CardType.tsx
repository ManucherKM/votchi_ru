import { FC, useRef } from 'react'
import { ICardType } from '../../types/types'

const CardType: FC<ICardType> = ({ text, color }) => {
	const styles = useRef(['default_card_type', color].join(' '))

	return <div className={styles.current}>{text}</div>
}

export default CardType
