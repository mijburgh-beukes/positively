import React from 'react'
import HabitListItem from './HabitListItem'

import { connect } from 'react-redux'

import { findBossHabit, findSadHabits } from '../utils'

function Agenda ({ user }) {
  const topHabit = findBossHabit(user)
  const bottomTwoHabits = findSadHabits(user)

  const topHabitID = topHabit ? topHabit.id : null
  // const topHabitTitle = topHabit ? topHabit.title : null
  // const topHabitGoalCount = topHabit ? topHabit.goalCount : null

  const b1ID = bottomTwoHabits ? bottomTwoHabits[0].id : null
  const b1 = bottomTwoHabits ? bottomTwoHabits[0] : null

  const b2ID = bottomTwoHabits ? bottomTwoHabits[1].id : null
  const b2 = bottomTwoHabits ? bottomTwoHabits[1] : null

  // const b1GoalCount = bottomTwoHabits ? bottomTwoHabits[0].goalCount : null
  // const b2Title = bottomTwoHabits ? bottomTwoHabits[1].title : null
  // const b2GoalCount = bottomTwoHabits ? bottomTwoHabits[1].goalCount : null

  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-1 pt-2 mb-sm-3 text-midnight">
      <div className="row">
        <h3 className="mb-3">Agenda</h3>
        <h5>Your top performing habit</h5>
        <div className="mb-2">
          <HabitListItem
            key={topHabitID}
            habit={topHabit}
            user={user}
          />
        </div>
        <h5>Habits needing some love</h5>
        <div>
          <HabitListItem
            key={b1ID}
            habit={b1}
            user={user}
          />
        </div>
        <div className="mb-2">
          <HabitListItem
            key={b2ID}
            habit={b2}
            user={user}
          />
        </div>
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
