import React from 'react'

import Habits from './Habits/Habits'
import AddHabit from './AddHabit'
import Achievements from './Achievements'
import Agenda from './Agenda'

const Dashboard = () => {
  return (
    <div>
      <Agenda />
      <Achievements />
    </div>
  )
}

export default Dashboard
