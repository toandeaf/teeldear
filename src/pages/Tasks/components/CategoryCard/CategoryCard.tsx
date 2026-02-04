import type { FC } from 'react'
import StatusCounterPill from '../StatusCounterPill'
import type { Category } from '../../types'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex flex-col border-2 border-black bg-white rounded-lg overflow-hidden transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
      <div className={`border-b-2 border-black ${category.color} px-4 py-2`}>
        <h3 className="text-sm font-black uppercase text-white">
          {category.name}
        </h3>
      </div>
      <div className="flex items-center gap-2 p-3 bg-zinc-50">
        <StatusCounterPill color="green" count={category.counts.green} />
        <StatusCounterPill color="yellow" count={category.counts.yellow} />
        <StatusCounterPill color="red" count={category.counts.red} />
      </div>
    </div>
  )
}
