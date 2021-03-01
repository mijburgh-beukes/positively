import React from 'react'
import { NavLink } from 'react-router-dom'
import { dashboardSVG, addHabitSVG, profileSVG, edithabitsSVG } from './NavItems'

const Nav = () => {
  return (
    <div className="nav d-flex flex-lg-column flex-sm-row rounded-3 align-items-center px-2 p-md-2">
      <div className="">
        <img src="/src/logo.svg" alt="app-logo" className="logo me-sm-2 mb-md-5" />
      </div>
      <div className="navItems d-flex flex-lg-column flex-sm-row">
        <NavLink exact={true} to="/">
          {dashboardSVG}
        </NavLink>
        <NavLink to="/addHabit">
          {addHabitSVG}
        </NavLink>
        <NavLink to="/user/:id">
          {profileSVG}
        </NavLink>
        <NavLink to="/edithabits">
          {edithabitsSVG}
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
