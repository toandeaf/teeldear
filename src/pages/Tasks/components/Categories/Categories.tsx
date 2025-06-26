import { FC } from 'react'
import Card from 'components/Card/Card'
import './Categories.css'
import Category from './Category'
import Filters from '../Filters/Filters'

const Categories: FC = () => {
  const examples = ['Tickets', 'Helping', 'Meetings', 'To-dos', 'PRs', 'Checks']

  return (
    <Card className={'categoriesCard'}>
      <Filters />
      <div className={'categories'}>
        {examples.map((category, index) => (
          <Category key={`category-${index}`} id={category} />
        ))}
      </div>
    </Card>
  )
}

export default Categories
