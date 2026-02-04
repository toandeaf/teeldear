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
      ? 'bg-emerald-500'
      : color === 'yellow'
        ? 'bg-yellow-400'
        : 'bg-red-500'

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center border-2 border-black font-bold text-black ${bgClass}`}
    >
      {count}
    </div>
  )
}
