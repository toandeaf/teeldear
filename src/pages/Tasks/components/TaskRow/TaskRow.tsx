import type { FC } from 'react'
import type { Task } from '../../types'

type TaskRowProps = {
  task: Task
}

export const TaskRow: FC<TaskRowProps> = ({ task }) => {
  const barColor =
    task.status === 'green'
      ? 'bg-emerald-500'
      : task.status === 'yellow'
        ? 'bg-yellow-400'
        : 'bg-red-500'

  const ringColor =
    task.status === 'green'
      ? 'ring-emerald-500'
      : task.status === 'yellow'
        ? 'ring-yellow-400'
        : 'ring-red-500'

  return (
    <div className="flex items-center border-4 border-black bg-white">
      <div className={`w-2 self-stretch ${barColor}`} />
      <div className="flex flex-1 items-center gap-4 px-4 py-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ring-2 ${ringColor} bg-zinc-100 text-xs font-bold text-zinc-600`}
        >
          {task.initials}
        </div>
        <div className="flex-1">
          <p className="font-bold text-black">{task.title}</p>
          <p className="text-sm text-zinc-500">{task.subtitle}</p>
        </div>
        <div className="rounded bg-zinc-800 px-3 py-1 text-sm font-bold text-white">
          {task.estimate}
        </div>
      </div>
    </div>
  )
}
