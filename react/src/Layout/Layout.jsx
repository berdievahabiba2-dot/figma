
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import ico from '../Companent/work.png'

const Layout = () => {
  return (
    <div>
      <header>
        <nav className="menu">
          <img src={ico} alt="" />
          <Link to="/">Биржа</Link>
          <Link to="/services">Ворки</Link>
          <Link to="/careers">Конкурсы</Link>
          <Link to="/careerDetails">Создать ворк</Link>
          <Link to="/contact">Создать заказ</Link>
          <div className='bb'>
            <button className='but'>Регистрация</button>
            <button className='but1'>Войти</button>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
