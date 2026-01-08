import type { FC } from 'react'
import { Card, CardHeader, CardBody } from './ui/Card'
import { StatusDot } from './ui/StatusDot'

type Task = {
  text: string
  status: 'green' | 'yellow' | 'red'
}

const tasks: Task[] = [
  {
    text: 'Task 1 - Quick little summary of where you last left it.',
    status: 'green',
  },
  {
    text: "Task 2 - You haven't picked this up yet but it's due tomorrow.",
    status: 'yellow',
  },
  { text: 'Task 3 - Similar sort of example.', status: 'yellow' },
]

export const OnDeckToday: FC = () => {
  return (
    <Card className="mb-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <CardHeader>
        <h2 className="text-xl font-black uppercase tracking-wide text-white">
          On Deck Today
        </h2>
      </CardHeader>
      <CardBody className="flex gap-8">
        <div className="flex gap-2">
          <StatusDot color="green" size="lg" />
          <StatusDot color="yellow" size="lg" />
          <StatusDot color="yellow" size="lg" />
        </div>
        <ul className="flex-1 space-y-2">
          {tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-3">
              <StatusDot color={task.status} size="sm" />
              <span className="text-sm font-medium text-zinc-800">{task.text}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}
