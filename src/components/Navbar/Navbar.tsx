import './Navbar.css'

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="logo">TL;DR</div>
        <div className="neu-divider"></div>

        <a href="#">Tasks</a>
        <a href="#">Team</a>
        <a href="#">Calendar</a>
        <a href="#">Notifications</a>
        <div className="neu-divider"></div>

        <a href="#">Projects</a>
        <a href="#">Archives</a>
        <a href="#">Settings</a>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Navbar
