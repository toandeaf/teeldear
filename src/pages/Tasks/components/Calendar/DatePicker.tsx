import { FC } from 'react'
import './DatePicker.css'

const DatePicker: FC = () => {
  return (
    <div className="weekday-selector">
      {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
        <label key={i} className="weekday-option">
          <input type="radio" name="weekday" value={day} />
          <span>{day}</span>
        </label>
      ))}
    </div>
  )
}

export default DatePicker
