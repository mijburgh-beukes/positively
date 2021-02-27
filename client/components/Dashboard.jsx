import React from 'react'
// TODO: confirm habitList component location - tentatively imported here

import Achievements from './Achievements'
import Agenda from './Agenda'
import UserDetails from './UserDetails'

import AddHabit from './AddHabit'

const Dashboard = () => {
  return (
    <div>
      <Agenda />
      <Achievements />
      <UserDetails />
      <AddHabit />
    </div>
  )
}

export default Dashboard
