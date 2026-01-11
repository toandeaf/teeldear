import type { FC } from 'react'

type StatusCounterPillProps = {
  color: 'green' | 'yellow' | 'red'
  count: number
}

export const StatusCounterPill: FC<StatusCounterPillProps> = ({ color, count }) => {
  if (count === 0) return null

  const dotClass =
    color === 'green'
      ? 'bg-emerald-400'
      : color === 'yellow'
        ? 'bg-yellow-400'
        : 'bg-red-400'

  return (
    <div className="flex items-center gap-1.5 rounded-md bg-zinc-800 px-2.5 py-1">
      <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
      <span className="text-sm font-bold text-white">{count}</span>
    </div>
  )
}
