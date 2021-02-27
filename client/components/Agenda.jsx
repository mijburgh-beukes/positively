import React from 'react'
import { connect } from 'react-redux'

function Agenda (props) {
  return (
    <div className="bg-white rounded-3 px-3 pb-1 pt-2 mb-3">
      <div className="row">
        <h3 className="module-header">Agenda</h3>
        <h4>Your top performing habit</h4>
        <HabitPH />
        <h4>Habits needing some love</h4>
        <HabitPH />
        <HabitPH />
        <h4><strong>Keep up that momentum!</strong></h4>
      </div>
    </div>
  )
}
// This is just a placeholder for the habit components
function HabitPH () {
  return (
    <div className="habitPH mb-2 ms-2 rounded-3">
      <p>Habit title in here</p>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Agenda)
