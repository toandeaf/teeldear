import type { FC } from 'react'
import { Panel } from '../Panel'
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
  return (
    <Panel className="w-56">
      <DayPicker activeDay={activeDay} onDayChange={onDayChange} />
      <TimeSlots />
    </Panel>
  )
}
