import request from 'superagent'

const baseUrl = '/api/v1/user'
const habitUrl = '/api/v1/habit'

export function getUser (id) {
  return request.get(`${baseUrl}/${id}`)
    .then((res) => {
      console.log('getUserApi', res)
      return res.body[0]
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function addHabit (habit) {
  return request
    .post(habitUrl)
    .send(habit)
    .then(res => {
      console.log('addHabbitApi', res)
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}
