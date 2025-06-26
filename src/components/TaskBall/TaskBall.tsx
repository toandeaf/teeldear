import { FC } from 'react'
import './TaskBall.css'

interface Props {
  color?: string
}

const TaskBall: FC<Props> = ({ color }) => {
  return <div className="taskBall" style={{ backgroundColor: color }}></div>
}

export default TaskBall
