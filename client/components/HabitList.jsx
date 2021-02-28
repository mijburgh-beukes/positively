import React from 'react'
import HabitListItem from './HabitListItem'

import { connect } from 'react-redux'

function HabitList ({ user }) {
  const orderedHabits = user.habits?.sort(function (a, b) {
    return a.goalCount - b.goalCount
  })
  return (
    <>
      <h4>Active Habits</h4>
      { orderedHabits?.map(habit =>
        <HabitListItem
          key={habit.id}
          habit={habit}
          user={user}
        />) }
    </>

  )
}

function mapsStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapsStateToProps)(HabitList)
