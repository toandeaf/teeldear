import { FC } from 'react'
import Card from 'components/Card/Card'
import './Categories.css'
import Category from './Category'

const Categories: FC = () => {
  const examples = ['Tickets', 'Helping', 'Meetings', 'To-dos', 'PRs', 'Checks']

  return (
    <Card className={'categories'}>
      {examples.map((category, index) => (
        <Category key={`category-${index}`} id={category} />
      ))}
    </Card>
  )
}

export default Categories
