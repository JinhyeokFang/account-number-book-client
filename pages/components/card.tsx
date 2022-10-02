import { FC } from 'react'
import styles from '../../styles/Card.module.css'

interface CardProps {
    children: JSX.Element
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div>
        card
        { children }
    </div>
  )
}

export default Card
