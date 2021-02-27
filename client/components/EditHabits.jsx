import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateHabit, removeHabit } from '../actions'

const EditHabits = (props) => {
  const [formData, setFormData] = useState()

  const handleChange = (event) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.dispatch(saveHabit(formData))
  }

  return (
    <div style={{padding: '2rem'}}>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">Title: </label>
          <input type="text" class="form-control" name="title" onChange={handleChange} placeholder="What's your habit?"/>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description: </label>
          <input type="text" class="form-control" name="description" onChange={handleChange} placeholder="Describe your habit?"/>
        </div>

        <div class="mb-3">
          <label for="habitIcon" class="form-label">Icon: </label>
          <input type="text" class="form-control" name="habitIcon" onChange={handleChange} placeholder="Icon source"/>
        </div>

        <div class="mb-3">
          <label for="totalGoalCount" class="form-label">Total Goal Count: </label>
          <input type="number" class="form-control" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!"/>
        </div>

        <div class="mb-3">
          <label for="priority" class="form-label">Priority: </label>
          <input type="range" class="form-range" min="0" max="5" name="priority"></input>
        </div>

        <button type="button" onClick={handleSubmit} class="btn btn-primary">Add Habit</button>

      </form>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    habits: globalState.user.habits
  }
}

export default connect(mapStateToProps)(EditHabits)
