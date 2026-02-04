import type { FC } from 'react'
import { Search } from 'lucide-react'

export const SearchFilters: FC = () => {
  return (
    <div className="mb-4 flex gap-3">
      <div className="flex-1 flex items-center border-2 border-black bg-white px-3 py-2">
        <Search size={16} className="text-zinc-400 mr-2" strokeWidth={2.5} />
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 text-sm font-bold text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
        />
      </div>
      <select className="border-2 border-black bg-white px-3 py-2 text-sm font-bold text-zinc-700 focus:outline-none cursor-pointer">
        <option>All Categories</option>
        <option>Tickets</option>
        <option>Helping</option>
        <option>Meetings</option>
      </select>
      <select className="border-2 border-black bg-white px-3 py-2 text-sm font-bold text-zinc-700 focus:outline-none cursor-pointer">
        <option>All Status</option>
        <option>On Track</option>
        <option>At Risk</option>
        <option>Blocked</option>
      </select>
    </div>
  )
}
