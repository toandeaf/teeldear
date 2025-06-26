import { FC } from 'react'
import Card from 'components/Card/Card.tsx'
import './Calendar.css'
import Timeline from './Timeline'
import DatePicker from './DatePicker.tsx'

const Calendar: FC = () => {
  return (
    <Card className={'calendarCard'}>
      <DatePicker />
      <Timeline />
    </Card>
  )
}

export default Calendar
