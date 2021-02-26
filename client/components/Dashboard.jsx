import React from 'react'

import Achievements from './Achievements'
import Agenda from './Agenda'
import UserDetails from './UserDetails'

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="module hero px-3 pt-2">
          <h1>Hello Burg</h1>
        </div>
        <Agenda />
      </div>
      <div className="col-md-3">
        <UserDetails />
        <Achievements />
      </div>
    </div>
  )
}

export default Dashboard
