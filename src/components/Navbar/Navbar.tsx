import './Navbar.css'
import {
  Bell,
  Settings,
  Calendar,
  Users,
  Archive,
  FolderOpen,
  CheckSquare,
} from 'lucide-react'

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="logo">TL;DR</div>
        <div className="neu-divider"></div>

        <a href="#">
          <CheckSquare size={20} />
          Tasks
        </a>
        <a href="#">
          <Users size={20} />
          Team
        </a>
        <a href="#">
          <Calendar size={20} />
          Calendar
        </a>
        <a href="#">
          <Bell size={20} />
          Notifications
        </a>
        <div className="neu-divider"></div>

        <a href="#">
          <FolderOpen size={20} />
          Projects
        </a>
        <a href="#">
          <Archive size={20} />
          Archives
        </a>
        <a href="#">
          <Settings size={20} />
          Settings
        </a>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Navbar
