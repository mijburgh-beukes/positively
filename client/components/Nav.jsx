import React from 'react'
import { NavLink } from 'react-router-dom'
import { dashboardSVG, addHabitSVG, profileSVG, edithabitsSVG } from './NavItems'

const Nav = ({ location }) => {
  console.log(location)
  return (
    <div className="nav d-flex flex-lg-column flex-lg-row rounded-3 ">
      <img src="/src/logo.svg" alt="app-logo" className="logo m-3" />
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
  )
}

export default Nav
