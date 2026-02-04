import type { FC } from 'react'

type ProgressBarProps = {
  value: number
  color?: string
}

export const ProgressBar: FC<ProgressBarProps> = ({
  value,
  color = 'bg-violet-500',
}) => (
  <div className="h-2 w-full rounded-full bg-zinc-200 border border-black">
    <div
      className={`h-full rounded-full ${color}`}
      style={{ width: `${Math.min(value, 100)}%` }}
    />
  </div>
)
