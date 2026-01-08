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

type CardHeaderProps = {
  children: ReactNode
  color?: string
}

export const CardHeader: FC<CardHeaderProps> = ({
  children,
  color = 'bg-violet-500',
}) => {
  return (
    <div className={`border-b-4 border-black ${color} px-5 py-3`}>
      {children}
    </div>
  )
}

type CardBodyProps = {
  children: ReactNode
  className?: string
}

export const CardBody: FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`p-5 ${className}`}>{children}</div>
}
