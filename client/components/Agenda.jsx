import React from 'react'

function Agenda () {
  return (
    <div className="container-sm agenda shadow px-4 pb-2 pt-4">
      <div className="row">
        <h2 className="module-2">Agenda</h2>
        <h4>Your top performing habit</h4>
        <HabitPH />
        <h4>Habits needing some love</h4>
        <HabitPH />
        <HabitPH />
        <h3>Keep up that momentum!</h3>
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
