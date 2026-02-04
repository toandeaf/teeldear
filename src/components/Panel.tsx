import type { FC, ReactNode } from 'react'

type PanelProps = {
  children: ReactNode
  className?: string
}

export const Panel: FC<PanelProps> = ({ children, className = '' }) => {
  return (
    <aside
      className={`flex flex-col border-4 border-black bg-zinc-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}
    >
      {children}
    </aside>
  )
}

type PanelHeaderProps = {
  children: ReactNode
  className?: string
}

export const PanelHeader: FC<PanelHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`border-b-4 border-black bg-violet-500 p-5 ${className}`}>
      {children}
    </div>
  )
}
