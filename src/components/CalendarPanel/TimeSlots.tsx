import type { FC } from 'react'
import { timeSlots } from './data'

export const TimeSlots: FC = () => {
  return (
    <div className="flex-1 overflow-auto bg-white p-3">
      {timeSlots.map((time) => (
        <div
          key={time}
          className="flex h-12 items-center border-b-2 border-zinc-200 px-4 text-base font-bold text-black"
        >
          <span className="mr-3 text-violet-400">—</span>
          {time}
        </div>
      ))}
    </div>
  )
}
