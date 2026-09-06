function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <span className="logo-icon">✦</span>
          <span>CAPACITY CONNECT</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <button className="login-btn">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar