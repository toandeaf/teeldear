import { useState, type FC } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { DayPicker } from './DayPicker'
import { TimeSlots } from './TimeSlots'

type CalendarPanelProps = {
  activeDay: number
  onDayChange: (day: number) => void
}

export const CalendarPanel: FC<CalendarPanelProps> = ({
  activeDay,
  onDayChange,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`relative flex h-full flex-col border-l-4 border-black bg-zinc-100 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-56'
      }`}
    >
      {collapsed ? (
        <CollapsedView activeDay={activeDay} />
      ) : (
        <>
          <DayPicker activeDay={activeDay} onDayChange={onDayChange} />
          <TimeSlots />
        </>
      )}

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -left-3 top-20 text-black flex h-6 w-6 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110 cursor-pointer"
      >
        {collapsed ? (
          <ChevronLeft size={14} strokeWidth={3} />
        ) : (
          <ChevronRight size={14} strokeWidth={3} />
        )}
      </button>
    </aside>
  )
}

const CollapsedView: FC<{ activeDay: number }> = ({ activeDay }) => {
  const dayLabels = ['M', 'T', 'W', 'T', 'F']

  return (
    <>
      <div className="border-b-4 border-black bg-violet-500 p-4 flex justify-center">
        <Calendar size={24} className="text-white" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col items-center py-4 gap-2">
        {dayLabels.map((day, i) => (
          <div
            key={i}
            className={`flex h-8 w-8 items-center justify-center text-sm font-black ${
              activeDay === i
                ? 'border-2 border-black bg-violet-500 text-white'
                : 'text-zinc-500'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </>
  )
}
