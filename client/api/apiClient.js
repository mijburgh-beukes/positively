import request from 'superagent'

const baseUrl = '/api/v1/user'
const habitUrl = '/api/v1/habit'

export function getUser (id) {
  return request.get(`${baseUrl}/${id}`)
    .then((res) => {
      return res.body[0]
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function patchUser (userId, userChanges) {
  console.log('api', userChanges)
  return request
    .patch(`${baseUrl}/${userId}`)
    .send(userChanges)
    .then(res => {
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function addHabit (habit) {
  return request
    .post(habitUrl)
    .send(habit)
    .then(res => {
      console.log('addhabbitAPI', res)
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function patchHabit (id, habit) {
  return request
    .patch(`${habitUrl}/${id}`)
    .send(habit)
    .then(res => {
      console.log('patchhabitAPI', res)
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function deleteHabit (id) {
  return request
    .delete(`${habitUrl}/${id}`)
    .then(res => {
      console.log('deletehabitAPI', res)
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}
