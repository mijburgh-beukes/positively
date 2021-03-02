import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveHabit } from '../actions'

import  SnackBar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

const AddHabit = (props) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false)

  const [snackBarMsg, setSnackBarMsg] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    userId: 1,
    description: '',
    habitIcon: '',
    totalGoalCount: 1,
    priority: 1,
    goalCount: 0
  })

  const snackBarClosing = () => {
    setSnackBarOpen(false)
  }

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
    setFormData({
      title: '',
      userId: 1,
      description: '',
      habitIcon: '',
      totalGoalCount: 1,
      priority: 1,
      goalCount: 0
    })
    setSnackBarOpen(true)
    setSnackBarMsg('Added!')
  }

  return (
    <div>
      <SnackBar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open = {snackBarOpen}
        autoHideDuration = {3000}
        onClose={snackBarClosing}

        message = {<span id='message-id'>{snackBarMsg}</span>}

        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            onClick={snackBarClosing}
          >
        x
          </IconButton>
        ]}
      />
      <div className="col pe-3 py-3 ps-3 ps-md-0">
        <form className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-2 text-midnight">
          <h3>Add your new habit</h3>
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
            <label htmlFor="totalGoalCount" className="form-label">Minimum times per week to attempt this habit: </label>
            <input type="number" className="form-control" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!" value={formData.totalGoalCount} min="1"/>
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority: </label>
            <input type="range" className="form-range" min="1" max="5" name="priority" value={formData.priority} onChange={handleChange}/>
          </div>

          <button type="button" onClick={handleSubmit} className="btn accentBG text-white">Add Habit</button>

        </form>
      </div>
    </div>
  )
}

export default connect()(AddHabit)
