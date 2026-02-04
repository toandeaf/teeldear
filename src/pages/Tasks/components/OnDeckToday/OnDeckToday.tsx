import type { FC } from 'react'
import { Zap } from 'lucide-react'
import { tasks } from '../../data'
import TaskRow from '../TaskRow'
import StatusCounterSquare from '../StatusCounterSquare'

const statusCounts = {
  green: tasks.filter((t) => t.status === 'green').length,
  yellow: tasks.filter((t) => t.status === 'yellow').length,
  red: tasks.filter((t) => t.status === 'red').length,
}

export const OnDeckToday: FC = () => {
  return (
    <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between border-b-4 border-black bg-violet-500 px-5 py-3">
        <div className="flex items-center gap-2">
          <Zap
            size={20}
            strokeWidth={3}
            className="text-yellow-300"
            fill="currentColor"
          />
          <h2 className="text-lg font-black uppercase tracking-wide text-white">
            On Deck Today
          </h2>
        </div>
        <div className="flex gap-1">
          <StatusCounterSquare color="green" count={statusCounts.green} />
          <StatusCounterSquare color="yellow" count={statusCounts.yellow} />
          <StatusCounterSquare color="red" count={statusCounts.red} />
        </div>
      </div>
      <div className="space-y-3 bg-zinc-100 p-4">
        {tasks.map((task, i) => (
          <TaskRow key={i} task={task} />
        ))}
      </div>
    </div>
  )
}
