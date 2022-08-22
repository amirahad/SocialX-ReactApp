import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo' smooth={true} duration="1000">
            <img src={logo} alt="LOGO"  />
        </Link>
        <input type="chackbox" className='menu-btn' id='menu-btn' />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' activeClass="active" spy={true} smooth={true} duration="1000">Home</Link></li>
            <li><Link to='features1' activeClass="active" spy={true} smooth={true} duration="1000">Features</Link></li>
            <li><Link to='services' activeClass="active" spy={true} smooth={true} duration="1000">Services</Link></li>
            <li><Link to='subscribe' activeClass="active" spy={true} smooth={true} duration="1000">Subscribe Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
