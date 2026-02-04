import type { FC, ReactNode } from 'react'

type PanelHeaderProps = {
  children: ReactNode
  className?: string
}

export const PanelHeader: FC<PanelHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`border-b-4 border-black bg-violet-500 p-5 ${className}`}>
      {children}
    </div>
  )
}
