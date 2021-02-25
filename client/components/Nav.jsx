import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <img src="" alt="app-logo"/>
      {/* TODO: need to be links once router is set up */}
      {/* TODO: needs image srcs */}
      <a to=""><img src="" alt="dashboard"/></a>
      <a to=""><img src="" alt="add-habit"/></a>
      <a to=""><img src="" alt="profile"/></a>
      <a to=""><img src="" alt="edit-habit"/></a>
    </div>
  )
}

export default Nav
