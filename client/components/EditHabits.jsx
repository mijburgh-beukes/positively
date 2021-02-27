import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateHabit, removeHabit } from '../actions'

const EditHabits = (props) => {
  const [formData, setFormData] = useState({})

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
    props.dispatch(updateHabit(formData))
  }

  return (
    <div style={{ padding: '2rem' }}>
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

        <button type="button" onClick={handleUpdate} className="btn btn-primary">Update Habit</button>

      </form>
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    habits: globalState
  }
}

export default connect(mapStateToProps)(EditHabits)
