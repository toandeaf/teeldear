import { FC } from 'react'
import './Tasks.css'
import Filters from './components/Filters/Filters.tsx'
import OnDeckToday from './components/OnDeckToday/OnDeckToday.tsx'
import Categories from './components/Categories/Categories.tsx'
import Calendar from './components/Calendar/Calendar.tsx'

const Tasks: FC = () => {
  return (
    <div className="taskContainer">
      <div className={'taskViewContainer'}>
        <Filters />
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
