import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

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
    <div className="container-fluid d-flex flex-column vh-100 justify-content-center align-items-center">
      <form className="d-flex shadow-sm p-4 flex-column mb-3" onSubmit={handleSubmit} method="POST">
        <img className="mb-3" src="./src/mainLogo.svg" height="200" alt=""/>
        <h3 className="text-center" style={{ opacity: '.8' }}><b>Login</b></h3>
        <label htmlFor="fname">First name:</label>
        <input type="text" name="fname" onChange={handleChange} />
        <label htmlFor="sname">Last name:</label>
        <input type="text" name="sname" onChange={handleChange} />
        <button className="mb-2 mt-3 p-2 btn btn-primary" style={{ background: '#ed1e79', borderColor: 'purple' }} type="submit">Login</button>
        <Link to="/register" className="btn" style={{ background: '#bbb' }}>Register</Link>
      </form>
      {err.length > 1 && <h3>{err}</h3>}

    </div>
  )
}

export default Login
