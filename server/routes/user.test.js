const request = require('supertest')

const db = require('../db/db')
const server = require('../server')

const baseURL = '/api/v1/'

jest.mock('../db/db', () => {
  return {
    getUser: jest.fn()
  }
})

const fakeReturnedData = [
  {
    id: 2,
    firstName: 'Allyson',
    lastName: 'Wonderland',
    userImage: 'Image goes here',
    totalXp: 0,
    pw: 'abc123',
    habits: [
      {
        id: 2,
        title: 'smoking',
        description: "I know it's bad for me but I enjoy it.",
        habitIcon: 'some icon',
        totalGoalCount: 0,
        priority: 1,
        goalCount: 0
      },
      {
        id: 3,
        title: 'picking my nose',
        description: 'I also enjoy picking my nose',
        habitIcon: 'some icon',
        totalGoalCount: 0,
        priority: 1,
        goalCount: 0
      }
    ]
  }
]

describe('GET /api/v1/user/:id', () => {
  it('responds with 200 on successful request', () => {
    db.getUser.mockImplementation(() => Promise.resolve(fakeReturnedData))
    expect.assertions(2)

    return request(server)
      .get(baseURL + '/user/2')
      .then(res => {
        console.log(res.status)
        expect(res.status).toBe(200)
        console.log(res.body)
        expect(res.body).toEqual(fakeReturnedData)
        return null
      })
  })
})
