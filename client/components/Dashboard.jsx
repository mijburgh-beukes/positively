import React from 'react'

import Habits from './Habits/Habits'
import AddHabit from './AddHabit'
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
