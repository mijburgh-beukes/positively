import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    userImage: ''
  })
  const [err, setErr] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setErr('')
    }, 4000)
  }, [err])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (user.firstName.length > 1 && user.lastName.length > 1) {
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(function (response) {
          return response
        })
        .then((response) => {
          if (response.status === 200) {
            history.push('/')
          } else {
            setErr('Could not create user')
          }
          return null
        }).catch(e => console.log(e))
    } else {
      setErr('Please fill out all provided fields')
    }
  }

  const handleChange = (event) => {
    event.preventDefault()
    if (event.target.name === 'firstName') {
      setUser({
        firstName: event.target.value,
        lastName: user.lastName,
        userImage: user.userImage
      })
    } else if (event.target.name === 'lastName') {
      setUser({
        firstName: user.firstName,
        lastName: event.target.value,
        userImage: user.userImage
      })
    } else if (event.target.name === 'userImage') {
      setUser({
        firstName: user.firstName,
        lastName: user.lastName,
        userImage: event.target.value
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <h3>Register</h3>
        <label htmlFor="firstName">First name:</label>
        <input type="text" name="firstName" onChange={handleChange} />
        <label htmlFor="lastName">Last name:</label>
        <input type="text" name="lastName" onChange={handleChange} />
        <label htmlFor="userImage">Image URL:</label>
        <input type="text" name="userImage" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
      {err.length > 1 && <h3>{err}</h3>}
      <Link to="/">Login</Link>
    </div>
  )
}

export default Register
