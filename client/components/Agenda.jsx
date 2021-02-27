import React from 'react'
import { connect } from 'react-redux'

import { findTopHabit } from '../utils'

function Agenda ({ user }) {
  const topHabitTitle = findTopHabit(user)

  return (
    <div className="container-sm module shadow px-3 pb-2 pt-3">
      <div className="row">
        <h2 className="module-h2">Agenda</h2>
        <h4>Your top performing habit</h4>
        <div className="habitPH mb-2 rounded-3">
          {topHabitTitle}
        </div>
        <h4>Habits needing some love</h4>
        <div className="habitPH mb-2 rounded-3">
          Habit title in here
        </div>
        <div className="habitPH mb-2 rounded-3">
          Habit title in here
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
