import { FC } from 'react'
import Card from 'components/Card/Card.tsx'
import TaskBall from 'components/TaskBall/TaskBall'
import './Categories.css'

interface Props {
  id: string
}

const Category: FC<Props> = ({ id }) => {
  const balls = [
    'green',
    'yellow',
    'orange',
    'green',
    'yellow',
    'orange',
    'yellow',
    'yellow',
  ]
  return (
    <Card className={'categoryCard'}>
      <h4>{id}</h4>
      <div className={'categoryTasks'}>
        {balls.map((color, index) => (
          <TaskBall key={`taskball-${index}`} color={color} />
        ))}
      </div>
    </Card>
  )
}

export default Category
