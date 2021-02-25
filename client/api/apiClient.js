import request from 'superagent'

const baseUrl = '/api/v1/user'

export function getUser (id) {
  return request.get(baseUrl + `/${id}`)
    .then((res) => {
      return res.body[0]
    })
    .catch(e => { throw new Error(e.response.text) })
}
