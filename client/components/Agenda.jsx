import React from 'react'

function Agenda () {
  return (
    <div className="container-sm agenda shadow px-4 py-2">
      <div className="row">
        <h4>Your top habit it</h4>
        <HabitPH />
        <h4>Habits needing some love</h4>
        <HabitPH />
        <HabitPH />
      </div>
    </div>
  )
}

function HabitPH () {
  return (
    <div className="habitPH mb-2 rounded-3">
      Habit title in here
    </div>
  )
}

export default Agenda
