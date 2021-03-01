import React from 'react'
import { connect } from 'react-redux'

import HabitListItem from './HabitListItem'

import { orderedHabitsByGoalCount } from '../utils'

function Agenda ({ user }) {
  const orderedHabits = orderedHabitsByGoalCount(user)
  const lengthOfOrderedHabits = orderedHabits ? orderedHabits.length - 1 : null

  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-1 pt-2 mb-sm-3">
      <div className="row">
        <h3 className="module-header">Agenda</h3>
        <h4>Your top performing habit</h4>
        {orderedHabits && <div className="habitPH mb-2 rounded-3">
          <HabitListItem
            key={orderedHabits[lengthOfOrderedHabits].id}
            habit={orderedHabits[lengthOfOrderedHabits]}
            user={user}
          />
        </div>}
        <h4>Habits needing some love</h4>
        {orderedHabits && <div className="habitPH mb-2 rounded-3">
          <HabitListItem
            key={orderedHabits[0].id}
            habit={orderedHabits[0]}
            user={user}
          />
        </div>}
        {orderedHabits && <div className="habitPH mb-2 rounded-3">
          <HabitListItem
            key={orderedHabits[1].id}
            habit={orderedHabits[1]}
            user={user}
          />
        </div>}
        <h2>Keep up that momentum!</h2>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Agenda)
