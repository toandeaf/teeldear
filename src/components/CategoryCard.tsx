import type { FC } from 'react'
import { Card } from './Card.tsx'
import { StatusCounterPill } from './StatusCounterPill'
import type { Category } from './CategoryGrid.config'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card hover>
      <div className={`border-b-4 border-black ${category.color} px-4 py-2`}>
        <h3 className="text-base font-black uppercase text-white">
          {category.name}
        </h3>
      </div>
      <div className="flex items-center gap-2 p-4">
        <StatusCounterPill color="green" count={category.counts.green} />
        <StatusCounterPill color="yellow" count={category.counts.yellow} />
        <StatusCounterPill color="red" count={category.counts.red} />
      </div>
    </Card>
  )
}
