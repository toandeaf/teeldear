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
    <div className="flex items-center border-2 border-black bg-white rounded-lg overflow-hidden transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className={`w-1.5 self-stretch ${barColor}`} />
      <div className="flex flex-1 items-center gap-4 px-4 py-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ring-2 ${ringColor} bg-zinc-100 text-xs font-bold text-zinc-700`}
        >
          {task.initials}
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-zinc-900">{task.title}</p>
          <p className="text-xs text-zinc-600">{task.subtitle}</p>
        </div>
        <div className="rounded border-2 border-black bg-zinc-800 px-2.5 py-1 text-xs font-bold text-white">
          {task.estimate}
        </div>
      </div>
    </div>
  )
}
