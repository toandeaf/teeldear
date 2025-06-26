import { FC } from 'react'
import './Filters.css'

const Filters: FC = () => {
  return (
    <div className={'filterBar'}>
      <input placeholder={'Quick search...'} className="input" />
      <select className="input">
        <option value="all">Sort by</option>
        <option value="today">Today</option>
        <option value="upcoming">Upcoming</option>
        <option value="completed">Completed</option>
      </select>
      <select className="input">
        <option value="all">Quick filters</option>
        <option value="project1">Project 1</option>
        <option value="project2">Project 2</option>
        <option value="project3">Project 3</option>
        <option value="project4">Add filter +</option>
      </select>
    </div>
  )
}

export default Filters
