import React, { useEffect } from 'react'
import { getUser } from '../apiClient'

// Components
import Dashboard from './Dashboard'
import Profile from './Profile'

const App = () => {
  useEffect(() => {
    getUser(2)
      .then((user) => {
        console.log(user)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Dashboard />
      <Profile user={user} />
    </>
  )
}

export default App
