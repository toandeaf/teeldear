import type { FC } from 'react'
import {
  LayoutList,
  Users,
  Calendar,
  Bell,
  FolderOpen,
  Archive,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import { Panel, PanelHeader } from './ui/Panel'

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
  return (
    <Panel className="w-48">
      <PanelHeader>
        <div className="border-4 border-black bg-white px-4 py-3 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-mono text-2xl font-black tracking-tight text-black">
            TL;DR
          </span>
        </div>
      </PanelHeader>

      <NavGroup items={navItems} activeNav={activeNav} onNavChange={onNavChange} />

      <div className="mx-4 my-2 border-t-2 border-zinc-300" />

      <NavGroup items={secondaryNav} activeNav={activeNav} onNavChange={onNavChange} />
    </Panel>
  )
}

type NavGroupProps = {
  items: NavItem[]
  activeNav: string
  onNavChange: (name: string) => void
}

const NavGroup: FC<NavGroupProps> = ({ items, activeNav, onNavChange }) => {
  return (
    <nav className="flex flex-col gap-2 p-4">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onNavChange(item.name)}
          className={`flex items-center gap-3 border-3 border-black px-4 py-2.5 text-left text-sm font-bold transition-all ${
            activeNav === item.name
              ? 'bg-violet-500 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-white text-black hover:bg-zinc-200'
          }`}
        >
          <item.icon size={18} strokeWidth={2.5} />
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  )
}
