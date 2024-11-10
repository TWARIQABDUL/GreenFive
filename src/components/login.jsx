import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="form">
          <form>
            <input type="text" placeholder='UserID' />
            <input type="password" placeholder='Password' />

            <Link to='/' className='btn-login'>Login</Link>
            {/* <button>Login</button> */}
          </form>
          {/* <Link to="#">Forgot password</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Login