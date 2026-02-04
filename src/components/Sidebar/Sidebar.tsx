import { useState, type FC } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { navItems, secondaryNav } from './data'
import { NavGroup } from './NavGroup'

type SidebarProps = {
  activeNav: string
  onNavChange: (name: string) => void
}

export const Sidebar: FC<SidebarProps> = ({ activeNav, onNavChange }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`relative flex h-full flex-col border-r-4 border-black bg-zinc-100 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-56'
      }`}
    >
      <div className="border-b-4 border-black bg-violet-500 p-4">
        <div className="border-4 border-black bg-white px-3 py-2 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-mono text-xl font-black tracking-tight text-black">
            {collapsed ? 'T' : 'TL;DR'}
          </span>
        </div>
      </div>

      <NavGroup
        items={navItems}
        activeNav={activeNav}
        onNavChange={onNavChange}
        collapsed={collapsed}
      />

      <div
        className={`my-2 border-t-2 border-zinc-300 ${collapsed ? 'mx-2' : 'mx-4'}`}
      />

      <NavGroup
        items={secondaryNav}
        activeNav={activeNav}
        onNavChange={onNavChange}
        collapsed={collapsed}
      />

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 text-black flex h-6 w-6 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110 cursor-pointer"
      >
        {collapsed ? (
          <ChevronRight size={14} strokeWidth={3} />
        ) : (
          <ChevronLeft size={14} strokeWidth={3} />
        )}
      </button>
    </aside>
  )
}
