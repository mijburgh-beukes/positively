import React, {useEffect} from 'react'
import { getUser } from '../apiClient'

const Dashboard = () => {

  useEffect(() => {
    getUser(2)
      .then((user) => {
        console.log(user)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

    </div>

  )
}

export default Dashboard