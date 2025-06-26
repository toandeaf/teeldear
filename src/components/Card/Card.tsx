import { FC, PropsWithChildren } from 'react'
import './Card.css'

interface Props extends PropsWithChildren {
  className?: string
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={className ? `card ${className}` : 'card'}>{children}</div>
  )
}

export default Card
