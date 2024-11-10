import React from 'react'
import systemimg from '../assets/system.png'
import automode from '../assets/automode.jpeg'
import { Link } from 'react-router-dom'

function QuickMenu() {
  return (
    <div className="quick-menu-container">
      <Link to='control'>
        <div className="quick-menu">
          <img src={systemimg} alt="" />
        </div>
      </Link>
      <Link to='control'>
        <div className="quick-menu">
          <img src={automode} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default QuickMenu