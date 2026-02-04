import type { FC } from 'react'

export const SearchFilters: FC = () => {
  return (
    <div className="mb-5 flex gap-4 text-black">
      <input
        type="text"
        placeholder="Quick search..."
        className="flex-1 border-4 border-black bg-white px-4 py-3 text-sm font-bold placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-violet-400"
      />
      <select className="border-4 border-black bg-white px-4 py-3 text-sm font-bold focus:outline-none">
        <option>Category</option>
        <option>Date</option>
        <option>Priority</option>
      </select>
      <select className="border-4 border-black bg-white px-4 py-3 text-sm font-bold focus:outline-none">
        <option>Quick filters</option>
        <option>Active</option>
        <option>Completed</option>
      </select>
    </div>
  )
}
