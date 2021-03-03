import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  dashboardSVG,
  addHabitSVG,
  profileSVG,
  edithabitsSVG
} from './NavItems'

const Nav = () => {
  return (
    <div className="navBar d-flex flex-lg-column flex-sm-row rounded-3 px-2 p-md-2">
      <div className="logoContainer pt-lg-2 img-fluid">
        <NavLink exact={true} to="/">
          <img src="/src/logo.svg" alt="app-logo" className="logo" />
        </NavLink>
      </div>
      <div className="navItems pt-lg-4 d-flex flex-lg-column flex-sm-row">
        <NavLink exact={true} to="/">
          {dashboardSVG}
        </NavLink>
        <NavLink to="/addHabit">{addHabitSVG}</NavLink>
        <NavLink to="/user/:id">{profileSVG}</NavLink>
        <NavLink to="/edithabits">{edithabitsSVG}</NavLink>
      </div>
    </div>
  )
}

export default Nav
