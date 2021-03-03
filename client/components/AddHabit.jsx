import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveHabit } from '../actions'

import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonStyle: {
    color: 'white',
    backgroundColor: '#ed1e79'
  }
})

const AddHabit = ({ dispatch, user }) => {
  const classes = useStyles()

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const [snackbarMsg, setSnackbarMsg] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    userId: user.userId,
    description: '',
    habitIcon: '',
    totalGoalCount: 1,
    priority: 1,
    goalCount: 0
  })

  const snackbarClosing = () => {
    setSnackbarOpen(false)
  }

  const handleChange = event => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(saveHabit(formData))
    setFormData({
      title: '',
      userId: user.userId,
      description: '',
      habitIcon: '',
      totalGoalCount: 1,
      priority: 1,
      goalCount: 0
    })
    setSnackbarOpen(true)
    setSnackbarMsg('Habit Added!')
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open = {snackbarOpen}
        autoHideDuration = {2000}
        onClose={snackbarClosing}
        message = {<span id='message-id'>{snackbarMsg}</span>}
        action={[
          <Button
            className={classes.buttonStyle}
            key='close'
            aria-label='close'
            onClick={snackbarClosing}
          >
        x
          </Button>
        ]}
      />
      <div className="col pe-3 py-3 ps-3 ps-md-0">
        <form className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-2 text-midnight">
          <h3>Add your new habit</h3>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:{' '}
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
              placeholder="What's your habit?"
              value={formData.title}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:{' '}
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleChange}
              placeholder="Describe your habit?"
              value={formData.description}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="totalGoalCount" className="form-label">Minimum times per week to attempt this habit: </label>
            <input type="number" className="form-control" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!" value={formData.totalGoalCount} min="1"/>
          </div>

          <button type="button" onClick={handleSubmit} className="btn accentBG text-white">Add Habit</button>

        </form>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddHabit)
