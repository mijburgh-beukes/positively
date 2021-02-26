import React from 'react'

function Agenda () {
  return (
    <div className="container-sm module shadow px-3 pb-2 pt-3">
      <div className="row">
        <h2 className="module-h2">Agenda</h2>
        <h4>Your top performing habit</h4>
        <HabitPH />
        <h4>Habits needing some love</h4>
        <HabitPH />
        <HabitPH />
        <h2>Keep up that momentum!</h2>
      </div>
    </div>
  )
}
// This is just a placeholder for the habit components
function HabitPH () {
  return (
    <div className="habitPH mb-2 rounded-3">
      Habit title in here
    </div>
  )
}

export default Agenda
