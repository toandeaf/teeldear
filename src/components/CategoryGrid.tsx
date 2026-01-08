import type { FC } from 'react'
import { Card } from './ui/Card'
import { StatusDot } from './ui/StatusDot'

type Category = {
  name: string
  dots: ('green' | 'yellow' | 'red')[]
  color: string
}

const categories: Category[] = [
  {
    name: 'Tickets',
    dots: ['green', 'green', 'yellow', 'yellow', 'red', 'red'],
    color: 'bg-violet-500',
  },
  {
    name: 'Helping',
    dots: ['yellow', 'yellow', 'yellow', 'green', 'green', 'green'],
    color: 'bg-cyan-500',
  },
  {
    name: 'Meetings',
    dots: ['green', 'green', 'red', 'yellow', 'yellow', 'yellow'],
    color: 'bg-pink-500',
  },
  {
    name: 'To-dos',
    dots: ['yellow', 'red', 'red', 'yellow', 'yellow', 'green'],
    color: 'bg-orange-500',
  },
  {
    name: 'PRs',
    dots: ['green', 'green', 'green', 'yellow', 'red', 'red'],
    color: 'bg-emerald-500',
  },
  {
    name: 'Checks',
    dots: ['green', 'yellow', 'yellow', 'green', 'green', 'green'],
    color: 'bg-blue-500',
  },
]

export const CategoryGrid: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {categories.map((cat) => (
        <CategoryCard key={cat.name} category={cat} />
      ))}
    </div>
  )
}

type CategoryCardProps = {
  category: Category
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card hover>
      <div className={`border-b-4 border-black ${category.color} px-4 py-2`}>
        <h3 className="text-base font-black uppercase text-white">{category.name}</h3>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {category.dots.map((color, i) => (
          <StatusDot key={i} color={color} />
        ))}
      </div>
    </Card>
  )
}
