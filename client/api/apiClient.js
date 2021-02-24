import request from 'superagent'

const baseUrl = '/api/v1/user'

export function getUser (id) {
  return request.get(baseUrl + `/${id}`)
    .then((res) => {
      console.log('api', res)
      return res.body
    })
    .catch(e => { throw new Error(e.response.text) })
}