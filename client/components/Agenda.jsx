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
        { (user.habits?.some(habit => habit.userId === user.userId))
          ? <>
            <p>Gidday! We&apos;ve curated some items for you to focus on&nbsp;today...</p>
            {habitWithLowestGC && (
              <>
                <h5>Habits needing some love</h5>
                <div /* className="habitPH mb-2 rounded-3" */>
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
          </>
          : <div className="agendaInfoContainer mb-2">
            <p className='agendaInfoHeader'>Create a habit to get started!</p>
            <ul>
              <li>
                <p>Set yourself a weekly goal. As you go through the week, click the
                  <strong> + </strong> button on your new habit to add to the weekly
                  counter and gain xp for your profile</p>
              </li>
              <li>
                <p>At the end of every week, remember to reset each habits counter
                  - don&apos;t worry, you won&apos;t lose your xp!</p>
              </li>
            </ul>
            <p className='agendaInfoHint'>*We recomend that you work on a maximum of three new habits at a time,
            for a period of one month in order to form your new habits well - But, it&apos;s entirely up to you!</p>
            <p className='agendaInfoGoal'>Our goal is to help you form new habits to improve your happiness
            and wellbeing - Good luck!</p>
          </div>
        }
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
