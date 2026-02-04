import {
  LayoutList,
  Users,
  Calendar,
  Bell,
  FolderOpen,
  LayoutDashboard,
  Archive,
  Settings,
} from 'lucide-react'
import type { NavItem } from './types'

export const navItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Tasks', icon: LayoutList },
  { name: 'Team', icon: Users },
  { name: 'Calendar', icon: Calendar },
  { name: 'Notifications', icon: Bell },
]

export const secondaryNav: NavItem[] = [
  { name: 'Projects', icon: FolderOpen },
  { name: 'Archives', icon: Archive },
  { name: 'Settings', icon: Settings },
]
