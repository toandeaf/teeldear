import type { FC } from 'react'
import { Panel } from './Panel.tsx'

const days = ['M', 'T', 'W', 'T', 'F']

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]

type CalendarPanelProps = {
  activeDay: number
  onDayChange: (day: number) => void
}

export const CalendarPanel: FC<CalendarPanelProps> = ({
  activeDay,
  onDayChange,
}) => {
  return (
    <Panel className="w-56">
      <DayPicker activeDay={activeDay} onDayChange={onDayChange} />
      <TimeSlots />
    </Panel>
  )
}

type DayPickerProps = {
  activeDay: number
  onDayChange: (day: number) => void
}

const DayPicker: FC<DayPickerProps> = ({ activeDay, onDayChange }) => {
  return (
    <div className="flex border-b-4 border-black bg-violet-500">
      {days.map((day, i) => (
        <button
          key={i}
          onClick={() => onDayChange(i)}
          className={`flex-1 border-r-2 border-black py-4 text-center text-base font-black last:border-r-0 ${
            activeDay === i
              ? 'bg-white text-black'
              : 'bg-violet-500 text-white hover:bg-violet-400'
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  )
}

const TimeSlots: FC = () => {
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
