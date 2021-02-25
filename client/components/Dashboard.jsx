import React from 'react'
import Habits from './Habits/Habits'
import AddHabit from './AddHabit'

const Dashboard = () => {
  return (
    <>
      <h4>This is the dashboard</h4>
      <AddHabit />
      <Habits />
    </>

  )
}

export default Dashboard
