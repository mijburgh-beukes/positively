import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateHabit } from '../actions'

const EditHabits = ({ dispatch, user }) => {
  console.log(user)
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

  function handleUpdate () {
    dispatch(updateHabit(formData.id, formData))
  }

  const populateForm = (habit) => {
    setFormData({
      id: habit.id,
      title: habit.title,
      userId: 1,
      description: habit.description,
      habitIcon: habit.habitIcon,
      totalGoalCount: habit.totalGoalCount,
      priority: habit.priority,
      goalCount: habit.goalCount
    })
  }

  return (
    <>
      <div className="col">
        {user.habits?.map(habit => (
          <button id={habit.id} key={habit.id} className="btn btn-secondary" onClick={() => (populateForm(habit))}>{habit.title}</button>))}
      </div>
      <div style={{ padding: '2rem' }} className="col">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title: </label>
            <input type="text" className="form-control" name="title" onChange={handleChange} placeholder="What's your habit?" value={formData.title}/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description: </label>
            <input type="text" className="form-control" name="description" onChange={handleChange} placeholder="Describe your habit?" value={formData.description}/>
          </div>

          <div className="mb-3">
            <label htmlFor="habitIcon" className="form-label">Icon: </label>
            <input type="text" className="form-control" name="habitIcon" onChange={handleChange} placeholder="Icon source" value={formData.habitIcon}/>
          </div>

          <div className="mb-3">
            <label htmlFor="totalGoalCount" className="form-label">Total Goal Count: </label>
            <input type="number" className="form-control" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!" value={formData.totalGoalCount}/>
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority: </label>
            <input type="range" className="form-range" min="0" max="5" name="priority" onChange={handleChange} value={formData.priority}/>
          </div>

          <button type="button" onClick={handleUpdate} className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(EditHabits)
