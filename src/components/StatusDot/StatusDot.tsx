import type { FC } from 'react'

type StatusDotProps = {
  color: 'green' | 'yellow' | 'red'
  size?: 'sm' | 'md' | 'lg'
}

export const StatusDot: FC<StatusDotProps> = ({ color, size = 'md' }) => {
  const colorClass =
    color === 'green'
      ? 'bg-emerald-400 border-emerald-600'
      : color === 'yellow'
        ? 'bg-yellow-400 border-yellow-600'
        : 'bg-red-400 border-red-600'

  const sizeClass =
    size === 'sm' ? 'h-5 w-5' : size === 'lg' ? 'h-14 w-14' : 'h-8 w-8'

  return <span className={`${sizeClass} rounded-full border-3 ${colorClass}`} />
}
