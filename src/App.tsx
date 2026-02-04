import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { CalendarPanel } from './components/CalendarPanel'
import { Tasks } from './pages/Tasks.tsx'
import { Dashboard } from './pages/Dashboard.tsx'

const App = () => {
  const [activeNav, setActiveNav] = useState('Tasks')
  const [activeDay, setActiveDay] = useState(2)

  return (
    <div className="flex h-screen bg-zinc-800 font-mono">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      <div className="flex flex-1 gap-4 p-4 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {activeNav === 'Tasks' && <Tasks />}
          {activeNav === 'Dashboard' && <Dashboard />}
        </main>

        <CalendarPanel activeDay={activeDay} onDayChange={setActiveDay} />
      </div>
    </div>
  )
}

export default App
