import type { FC } from 'react'
import type { StatusColor } from '../../types'

type StatusCounterPillProps = {
  color: StatusColor
  count: number
}

export const StatusCounterPill: FC<StatusCounterPillProps> = ({
  color,
  count,
}) => {
  if (count === 0) return null

  const bgClass =
    color === 'green'
      ? 'bg-emerald-100 border-emerald-300 text-emerald-700'
      : color === 'yellow'
        ? 'bg-yellow-100 border-yellow-300 text-yellow-700'
        : 'bg-red-100 border-red-300 text-red-700'

  const dotClass =
    color === 'green'
      ? 'bg-emerald-500'
      : color === 'yellow'
        ? 'bg-yellow-500'
        : 'bg-red-500'

  return (
    <div className={`flex items-center gap-1.5 rounded border px-2 py-0.5 ${bgClass}`}>
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      <span className="text-xs font-bold">{count}</span>
    </div>
  )
}
