import request from 'superagent'

const userUrl = '/api/v1/user'
const habitUrl = '/api/v1/habit'

export function getUser (id) {
  return request.get(`${userUrl}/${id}`)
    .then((res) => {
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function patchUser (userId, userChanges) {
  return request
    .patch(`${userUrl}/${userId}`)
    .send(userChanges)
    .then(res => {
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function postHabit (habit) {
  return request
    .post(habitUrl)
    .send(habit)
    .then(res => {
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function patchHabit (id, habit) {
  return request
    .patch(`${habitUrl}/${id}`)
    .send(habit)
    .then(res => {
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function deleteHabit (id) {
  return request
    .delete(`${habitUrl}/${id}`)
    .then(res => {
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}
