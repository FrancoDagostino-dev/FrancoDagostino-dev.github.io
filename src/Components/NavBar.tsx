import '../index.css'

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className='nav-bar-left-section'>
        <h1>My Portfolio</h1>
      </div>
      <div className='nav-bar-right-section'>
        <a>About me</a>
        <a>Projects</a>
        <a>Experience</a>
        <a>Contact</a>
      </div>
    </nav>
  )
}

export default NavBar