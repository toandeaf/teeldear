import './Navbar.css'

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="logo">TL;DR</div>
      <div className="nav">
        <a href="#">Tasks</a>
        <a href="#">Calendar</a>
        <a href="#">Team</a>
      </div>
      <div className="footer">
        <a href="#">Projects</a>
        <a href="#">Archives</a>
      </div>
    </div>
  )
}

export default Navbar
