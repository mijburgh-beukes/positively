import React from 'react'
import { connect } from 'react-redux'

import HabitListItem from './HabitListItem'

import { orderedHabitsByGoalCount } from '../utils'

function Agenda ({ user }) {
  const orderedHabits = orderedHabitsByGoalCount(user)

  // TODO: Possible opportunity for factoriseation
  const habitWithLowestGC = orderedHabits ? orderedHabits[0] : null
  const habitWith2ndLowestGC = orderedHabits ? orderedHabits[1] : null
  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-1 pt-2 mb-3 text-midnight">
      <div className="row">
        <h3 className="mb-3">Agenda</h3>
        <p>Welcome back! We&apos;ve curated some items for you to focus on&nbsp;today...</p>
        {habitWithLowestGC && (
          <>
            <h5>Habits needing some love</h5>
            <div>
              <HabitListItem
                key={habitWithLowestGC.id}
                habit={habitWithLowestGC}
                user={user}
              />
            </div>
          </>
        )}
        {habitWith2ndLowestGC && (
          <div className="mb-2">
            <HabitListItem
              key={habitWith2ndLowestGC.id}
              habit={habitWith2ndLowestGC}
              user={user}
            />
          </div>
        )}
        <h3>Keep up that momentum!</h3>
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
