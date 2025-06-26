import { FC } from 'react'
import Card from 'components/Card/Card'
import './OnDeckToday.css'
import TaskBall from 'components/TaskBall/TaskBall'

const OnDeckToday: FC = () => {
  return (
    <Card className={'onDeckToday'}>
      <div className={'onDeckContainer'}>
        <div className={'onDeckBalls'}>
          <h4>On Deck Today</h4>
          <Card className={'tasks'}>
            <TaskBall />
            <TaskBall color={'yellow'} />
            <TaskBall color={'orange'} />
          </Card>
        </div>
        <div>
          <ul className={'taskSummary'}>
            <li>Task 1 - Quick little summary of where you last left it.</li>
            <li>
              Task 2 - You haven't picked this up yet but it's due tomorrow.
            </li>
            <li>Task 3 - Similar sort of example.</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default OnDeckToday
