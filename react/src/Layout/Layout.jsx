
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import photo from '../Companent/Logo.png'

const Layout = () => {
  return (
    <div>
      <header>
        <img className="logo" src={photo} alt="Logo" />

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/careerDetails">CareerDetails</Link>
          <Link to="/contact">Contact</Link>
        </nav>
          <button className='contact-btn'>Contact Us</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
