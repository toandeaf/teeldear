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
    <div className="flex h-screen bg-zinc-800 font-mono">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      <div className="flex flex-1 gap-4 p-4">
        <main className="flex flex-1 flex-col gap-4 overflow-auto">
          <OnDeckToday />
          <div className="border-4 border-black bg-zinc-100 p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <SearchFilters />
            <CategoryGrid />
          </div>
        </main>

        <CalendarPanel activeDay={activeDay} onDayChange={setActiveDay} />
      </div>
    </div>
  )
}

export default App
