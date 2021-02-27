import React from 'react'
// TODO: confirm habitList component location - tentatively imported here

import Achievements from './Achievements'
import Agenda from './Agenda'
import UserDetails from './UserDetails'

import AddHabit from './AddHabit'

const Dashboard = () => {
  return (
    <div className="row gx-3 pe-3 py-3">
      <div className="col-md-9">
        <div className="hero rounded-3 px-3 pb-1 pt-2 mb-3">
          <h1>Hello Burg</h1>
          <p>Here&apos;s an overview of your lifestyle ...</p>
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
