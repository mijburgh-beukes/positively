import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateHabit, removeHabit } from '../actions'

const EditHabits = ({ dispatch, user }) => {
  const [formData, setFormData] = useState({
    title: '',
    userId: 1,
    description: '',
    habitIcon: '',
    totalGoalCount: 1,
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
    dispatch(updateHabit(formData.habitId, formData))
  }

  function handleDelete () {
    dispatch(removeHabit(formData.habitId))
    setFormData({
      title: '',
      userId: 1,
      description: '',
      habitIcon: '',
      totalGoalCount: 1,
      priority: 0,
      goalCount: 0
    })
  }

  const populateForm = (habit) => {
    setFormData({
      habitId: habit.habitId,
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
    <div className="row gx-3 pe-3 py-3 ps-3 ps-md-0">
      <div className="col">
        <div className=" text-midnight shadow-sm rounded-3 px-3 pb-1 pt-2 mb-3 bg-white">
          <h1>Edit your habits</h1>
          <p>Pick one from the list on the left</p>
        </div>
        <div className="row gx-3">
          <div className="col-3 d-flex flex-column">
            {user.habits?.map(habit => (
              <button id={habit.habitId} key={habit.habitId} className="btn shadow-sm accentBG text-white mb-2 editlist" onClick={() => (populateForm(habit))}>{habit.title}</button>))}
          </div>
          <div /* style={{ padding: '2rem' }}  */className="col">
            <form className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-2 text-midnight">
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
                <label htmlFor="totalGoalCount" className="form-label">Minimum times to action: </label>
                <input type="number" className="form-control" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!" value={formData.totalGoalCount}/>
              </div>

              <div className="mb-3">
                <label htmlFor="priority" className="form-label">Priority: </label>
                <input type="range" className="form-range text-midnight" min="0" max="5" name="priority" onChange={handleChange} value={formData.priority}/>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" onClick={handleUpdate} className="btn accentBG text-white updateBTN">Update</button>

                <button type="button" onClick={handleDelete} className="btn midnightBG text-white delBTN">Delete Habit</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(EditHabits)
