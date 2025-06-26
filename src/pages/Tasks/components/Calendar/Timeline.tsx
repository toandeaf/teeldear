import { FC } from 'react'
import './Timeline.css'

const Timeline: FC<{ className?: string }> = ({ className = '' }) => {
  const hours = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 9
    return `${String(hour).padStart(2, '0')}:00`
  })

  return (
    <div className={`timeline-container ${className}`}>
      <div className="timeline-line" />
      <div className="timeline-hours">
        {hours.map((hour, i) => (
          <div key={i} className="timeline-hour">
            <div className="timeline-notch" />
            <span className="timeline-label">{hour}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
