import type { FC } from 'react'
import type { NavItem } from './types'

type NavGroupProps = {
  items: NavItem[]
  activeNav: string
  onNavChange: (name: string) => void
  collapsed: boolean
}

export const NavGroup: FC<NavGroupProps> = ({
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
