import type { FC } from 'react'
import { categories } from './CategoryGrid.config'
import { CategoryCard } from './CategoryCard'

export const CategoryGrid: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {categories.map((cat) => (
        <CategoryCard key={cat.name} category={cat} />
      ))}
    </div>
  )
}
