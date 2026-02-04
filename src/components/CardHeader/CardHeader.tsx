import type { FC, ReactNode } from 'react'

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
