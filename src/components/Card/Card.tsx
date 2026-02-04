import type { FC, ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card: FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  const hoverClass = hover
    ? 'transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
    : ''

  return (
    <div
      className={`border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${hoverClass} ${className}`}
    >
      {children}
    </div>
  )
}
