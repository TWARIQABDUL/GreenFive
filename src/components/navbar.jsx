import React from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.png'

function Navbar() {
  return (
    <nav>
        <div className="image-logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu-btn">
            <img src={menu} alt="" />
        </div>
    </nav>
  )
}

export default Navbar