import type { FC } from 'react'
import OnDeckToday from './components/OnDeckToday'
import SearchFilters from './components/SearchFilters'
import CategoryGrid from './components/CategoryGrid'

export const Tasks: FC = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 w-full h-full">
      <OnDeckToday />
      <div className="flex flex-col border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="border-b-4 border-black bg-zinc-700 px-4 py-3">
          <h3 className="text-base font-black uppercase tracking-wide text-white">
            All Tasks
          </h3>
        </div>
        <div className="bg-zinc-50 p-4 flex-1 overflow-y-auto">
          <SearchFilters />
          <CategoryGrid />
        </div>
      </div>
    </div>
  )
}
