import type { FC } from 'react'
import type { StatusColor } from '../../types'

type StatusCounterSquareProps = {
  color: StatusColor
  count: number
}

export const StatusCounterSquare: FC<StatusCounterSquareProps> = ({
  color,
  count,
}) => {
  const bgClass =
    color === 'green'
      ? 'bg-emerald-400 border-emerald-600'
      : color === 'yellow'
        ? 'bg-yellow-400 border-yellow-600'
        : 'bg-red-400 border-red-600'

  return (
    <div
      className={`flex h-7 w-7 items-center justify-center border-2 text-xs font-black text-black ${bgClass}`}
    >
      {count}
    </div>
  )
}
