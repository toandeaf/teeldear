import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { CalendarPanel } from './components/CalendarPanel'
import { Tasks } from './pages/Tasks'
import { Dashboard } from './pages/Dashboard'

const App = () => {
  const [activeNav, setActiveNav] = useState('Tasks')
  const [activeDay, setActiveDay] = useState(2)

  return (
    <div className="flex h-screen bg-zinc-800 font-mono">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      <div className="flex-1 p-4 overflow-hidden">
        <main className="h-full overflow-y-auto">
          {activeNav === 'Tasks' && <Tasks />}
          {activeNav === 'Dashboard' && <Dashboard />}
        </main>
      </div>

      <CalendarPanel activeDay={activeDay} onDayChange={setActiveDay} />
    </div>
  )
}

export default App
