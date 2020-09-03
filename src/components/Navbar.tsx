import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(): React.ReactElement {
  return (
    <div className='nav'>
      <div className='nav__menu'>
        <NavLink className='nav__link nav__logolink' to='/'>
          TodosIST
        </NavLink>
        <NavLink
          exact
          className='nav__link'
          activeClassName='nav__link--active'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='nav__link'
          activeClassName='nav__link--active'
          to='/about'
        >
          About
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
