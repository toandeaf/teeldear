import { useState, type FC } from 'react'
import {
  LayoutList,
  Users,
  Calendar,
  Bell,
  FolderOpen,
  Archive,
  Settings,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'

type NavItem = {
  name: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { name: 'Tasks', icon: LayoutList },
  { name: 'Team', icon: Users },
  { name: 'Calendar', icon: Calendar },
  { name: 'Notifications', icon: Bell },
]

const secondaryNav: NavItem[] = [
  { name: 'Projects', icon: FolderOpen },
  { name: 'Archives', icon: Archive },
  { name: 'Settings', icon: Settings },
]

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

type NavGroupProps = {
  items: NavItem[]
  activeNav: string
  onNavChange: (name: string) => void
  collapsed: boolean
}

const NavGroup: FC<NavGroupProps> = ({
  items,
  activeNav,
  onNavChange,
  collapsed,
}) => {
  return (
    <nav className={`flex flex-col gap-2 ${collapsed ? 'p-2' : 'p-4'}`}>
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onNavChange(item.name)}
          title={collapsed ? item.name : undefined}
          className={`flex items-center border-3 border-black text-left text-sm font-bold transition-all ${
            collapsed ? 'justify-center p-2.5' : 'gap-3 px-4 py-2.5'
          } ${
            activeNav === item.name
              ? 'bg-violet-500 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-white text-black hover:bg-zinc-200 cursor-pointer'
          }`}
        >
          <item.icon size={18} strokeWidth={2.5} />
          {!collapsed && <span>{item.name}</span>}
        </button>
      ))}
    </nav>
  )
}
