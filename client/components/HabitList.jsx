import React from 'react'
import HabitListItem from './HabitListItem'

import { connect } from 'react-redux'

function HabitList ({ user }) {
  // const { habits } = props.user
  return (
    <div>
      <h4>Active Habits</h4>
      { user.habits?.map(habit =>
        <HabitListItem
          key={habit.id}
          habitObj={habit}
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
