import React from 'react'
import HabitListItem from './HabitListItem'

import { connect } from 'react-redux'

function HabitList ({ user }) {
  const orderedHabits = user.habits?.sort(function (a, b) {
    return a.goalCount - b.goalCount
  })
  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3 mb-3">
      <h3 className="text-midnight">Active Habits</h3>
      { orderedHabits?.map(habit =>
        <HabitListItem
          key={habit.id}
          habit={habit}
          user={user}
        />) }
    </div>

  )
}

function mapsStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapsStateToProps)(HabitList)
