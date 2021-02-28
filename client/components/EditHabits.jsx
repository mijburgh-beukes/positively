import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateHabit, removeHabit } from '../actions'

const EditHabits = ({ dispatch, habits }) => {

  // onclick set form state to that data from the habit clicked and display form with already populated data from clicked habit

  
  const [formData, setFormData] = useState({
    title: '',
    userId: 1,
    description: '',
    habitIcon: '',
    totalGoalCount: 0,
    priority: 0,
    goalCount: 0
  })

  const handleChange = (event) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateHabit(formData))
  }

  const populateForm = (habit, event) => {
    // event.preventDefault()
    setFormData({
      title: habit.title,
      userId: 1,
      description: habit.description,
      habitIcon: habit.habitIcon,
      totalGoalCount: habit.totalGoalCount,
      priority: habit.priority,
      goalCount: habit.goalCount
    })
    console.log(habit)
  }
  
  return (
    <>
      <div className="col">
        {habits?.map(habit => (
          <button id={habit.id} key={habit.id} className="btn btn-secondary" onClick={() => (populateForm(habit))}>{habit.title}</button>))}
      </div>
      <div style={{ padding: '2rem' }} className="col">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title: </label>
            <input type="text" className="form-control" name="title" onChange={handleChange} placeholder="What's your habit?"/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description: </label>
            <input type="text" className="form-control" name="description" onChange={handleChange} placeholder="Describe your habit?"/>
          </div>

          <div className="mb-3">
            <label htmlFor="habitIcon" className="form-label">Icon: </label>
            <input type="text" className="form-control" name="habitIcon" onChange={handleChange} placeholder="Icon source"/>
          </div>

          <div className="mb-3">
            <label htmlFor="totalGoalCount" className="form-label">Total Goal Count: </label>
            <input type="number" className="form-control" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!"/>
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority: </label>
            <input type="range" className="form-range" min="0" max="5" name="priority"></input>
          </div>

          <button type="button" onClick={handleUpdate} className="btn btn-primary">Update</button>

        </form>
      </div>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    habits: globalState.user.habits
  }
}

export default connect(mapStateToProps)(EditHabits)
