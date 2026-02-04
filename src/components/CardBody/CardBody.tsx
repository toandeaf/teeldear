import type { FC, ReactNode } from 'react'

type CardBodyProps = {
  children: ReactNode
  className?: string
}

export const CardBody: FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`p-5 ${className}`}>{children}</div>
}
