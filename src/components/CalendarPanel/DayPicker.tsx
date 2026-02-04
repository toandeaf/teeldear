import type { FC } from 'react'
import { days } from './data'

type DayPickerProps = {
  activeDay: number
  onDayChange: (day: number) => void
}

export const DayPicker: FC<DayPickerProps> = ({ activeDay, onDayChange }) => {
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
