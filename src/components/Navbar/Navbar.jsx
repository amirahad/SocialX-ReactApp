import React from 'react'
import logo from '../../images/logo.png'

function Navbar() {
  return (
    <div>
      <nav>
        <a href className='logo'>
            <img src={logo} alt="LOGO"  />
        </a>
        <input type="chackbox" className='menu-btn' id='menu-btn' />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className='menu'>
            <li><a href className='active'>Home</a></li>
            <li><a href>Features</a></li>
            <li><a href>Services</a></li>
            <li><a href>About Us</a></li>
            <li><a href>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
