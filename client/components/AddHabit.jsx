import React, { useState } from 'react'
import { connect } from 'react-redux'

const AddHabit = () => {
  const [formData, setFormData] = useState({
     title: "",
     description: "",
     habitIcon: "",
     totalGoalCount: 0,
     priority: 0,
     goalCount: 0,
    })

  const handleChange = (event) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <>
      <form>
        <label>
          Habit:
          <input type="text" name="title" onChange={handleChange} placeholder="What's your habit?" />
        </label>

        <label>
          Description:
          <input type="text" name="description" onChange={handleChange} placeholder="Describe your habit" />
        </label>

        <label>
          Icon:
          <input type="text" name="habitIcon" onChange={handleChange} placeholder="image src goes here" />
        </label>

        <label>
          total goal count:
          <input type="number" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit!" />
        </label>

        <label>
          Priority:
          <input type="number" name="priority" onChange={handleChange} placeholder="choose a number from 1 - 5, 1 being the highest" />
        </label>
      </form>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    newHabit: globalState.newHabit
  }
}


export default connect(mapStateToProps)(AddHabit)
