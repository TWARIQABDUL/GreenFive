import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login.jsx'
import Control from './components/control.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/control' element={<Control/>} />
      </Routes>
      <div className="update">
        This page is still under development
      </div>
    </BrowserRouter>
  </StrictMode>,
)
