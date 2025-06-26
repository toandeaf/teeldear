import { FC } from 'react'
import './Tasks.css'
import OnDeckToday from './components/OnDeckToday/OnDeckToday.tsx'
import Categories from './components/Categories/Categories.tsx'
import Calendar from './components/Calendar/Calendar.tsx'

const Tasks: FC = () => {
  return (
    <div className="taskContainer">
      <div className={'taskViewContainer'}>
        <OnDeckToday />
        <Categories />
      </div>
      <div className={'calendarContainer'}>
        <Calendar />
      </div>
    </div>
  )
}

export default Tasks
