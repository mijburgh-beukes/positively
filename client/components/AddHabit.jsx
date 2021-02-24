import React, { useState } from 'react'

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
    setFormData
  }

  return (
    <>
      <form>
        <label>
          Habit:
          <input type="text" name="title" onChange={handleChange} placeholder="What's your habbit?" />
        </label>

        <label>
          Description:
          <input type="text" name="description" onChange={handleChange} placeholder="Describe your habbit (optional)" />
        </label>

        <label>
          Icon:
          <input type="image" name="habitIcon" onChange={handleChange} placeholder="🏃‍♂️ 🏋️ 📚?" />
        </label>

        <label>
          total goal count:
          <input type="number" name="totalGoalCount" onChange={handleChange} placeholder="The skys the limit! how brave are you?" />
        </label>

        <label>
          Priority:
          <input type="number" name="priority" onChange={handleChange} placeholder="choose a number from 1 - 5, 1 being the highest" />
        </label>

        <label>
          Goal count:
          <input type="number" name="goalCount" onChange={handleChange} value={0} />
        </label>

      </form>
    </>
  )
}

export default AddHabit
