import React from 'react'

import Achievements from './Achievements'
import Agenda from './Agenda'
import UserDetails from './UserDetails'

const Dashboard = () => {
  return (
    <div>
      <Agenda />
      <Achievements />
      <UserDetails />
    </div>
  )
}

export default Dashboard
