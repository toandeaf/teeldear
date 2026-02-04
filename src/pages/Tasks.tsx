import { OnDeckToday } from '../components/OnDeckToday.tsx'
import { SearchFilters } from '../components/SearchFilters.tsx'
import { CategoryGrid } from '../components/CategoryGrid.tsx'

export const Tasks = () => {
  return (
    <div className={'flex flex-col w-full'}>
      <OnDeckToday />
      <div className="border-4 border-black bg-zinc-100 p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <SearchFilters />
        <CategoryGrid />
      </div>
    </div>
  )
}
