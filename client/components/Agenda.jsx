import React from 'react'
import { connect } from 'react-redux'

import { findTopHabit, findBottomTwoHabits } from '../utils'

function Agenda ({ user }) {
  const topHabitTitle = findTopHabit(user)
  const bottomTwoHabits = findBottomTwoHabits(user)

  const b1 = bottomTwoHabits ? bottomTwoHabits[0].title : null
  const b2 = bottomTwoHabits ? bottomTwoHabits[1].title : null

  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-1 pt-2 mb-sm-3">
      <div className="row">
        <h3 className="module-header">Agenda</h3>
        <h4>Your top performing habit</h4>
        <div className="habitPH mb-2 rounded-3">
          {topHabitTitle}
        </div>
        <h4>Habits needing some love</h4>
        <div className="habitPH mb-2 rounded-3">
          {b1}
        </div>
        <div className="habitPH mb-2 rounded-3">
          {b2}
        </div>
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
