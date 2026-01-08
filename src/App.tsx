import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { CalendarPanel } from './components/CalendarPanel'
import { OnDeckToday } from './components/OnDeckToday'
import { SearchFilters } from './components/SearchFilters'
import { CategoryGrid } from './components/CategoryGrid'

const App = () => {
  const [activeNav, setActiveNav] = useState('Tasks')
  const [activeDay, setActiveDay] = useState(2)

  return (
    <div className="flex h-screen gap-4 bg-zinc-800 p-4">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      <main className="flex-1 overflow-auto border-4 border-black bg-zinc-100 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <OnDeckToday />
        <SearchFilters />
        <CategoryGrid />
      </main>

      <CalendarPanel activeDay={activeDay} onDayChange={setActiveDay} />
    </div>
  )
}

export default App
