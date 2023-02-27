import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <nav className={style.navBar}>

        <ul className='list-unstyled d-flex'>

          <li className='px-2'><NavLink to='/'>Logo</NavLink></li>
          <li className='px-2'><NavLink to='/home'>Home</NavLink></li>
        </ul>

        <ul className='list-unstyled d-flex '>
          <li className='px-2'><NavLink to='/register'>Register</NavLink></li>
          <li className='px-2'><NavLink to='/login'>Login</NavLink></li>
          {/* <li className='px-2'><NavLink to='/logout'>Logout</NavLink></li> */}
        </ul>
      </nav>
    </div>
  )
}
