import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ setLogin }) => {
  const history = useHistory()
  const [user, setUser] = useState({
    fname: '',
    sname: ''
  })
  const [err, setErr] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setErr('')
    }, 4000)
  }, [err])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (user.fname.length > 1 && user.sname.length > 1) {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(function (response) {
          if (response.ok) {
            return response.json()
          }
          return response
        })
        .then((response) => {
          if (response.ok === false) {
            setErr('Incorrect Login Details')
          } else {
            setLogin(response[0].id)
            history.push('/')
          }
          return null
        }).catch(e => console.log(e))
    } else {
      setErr('Please fill out all provided fields')
    }
  }

  const handleChange = (event) => {
    event.preventDefault()

    if (event.target.name === 'fname') {
      setUser({
        fname: event.target.value,
        sname: user.sname
      })
    } else {
      setUser({
        fname: user.fname,
        sname: event.target.value
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <h3>Login</h3>
        <label htmlFor="fname">First name:</label>
        <input type="text" name="fname" onChange={handleChange} />
        <label htmlFor="sname">Last name:</label>
        <input type="text" name="sname" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {err.length > 1 && <h3>{err}</h3>}
    </div>
  )
}

export default Login
