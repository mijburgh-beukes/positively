const request = require('supertest')

const db = require('../db/db')
const server = require('../server')

const baseURL = '/api/v1/'

jest.mock('../db/db', () => {
  return {
    getUser: jest.fn(),
    updateUser: jest.fn()
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
      .get(baseURL + 'user/2')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(fakeReturnedData)
        return null
      })
  })

  it('should reject with a 500 code', () => {
    db.getUser.mockImplementation(() => Promise.reject(new Error('oh noes!')))
    expect.assertions(2)

    return request(server)
      .get(baseURL + 'user/2')
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
        return null
      })
  })
})

describe('PATCH /api/v1/:id', () => {
  it('responds with 200 on successful update', () => {
    db.updateUser.mockImplementation(() => Promise.resolve())
    expect.assertions(2)

    return request(server)
      .patch(baseURL + 'user/1')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.text).toEqual('Success')
        return null
      })
  })

  it('should reject with status 500', () => {
    db.updateUser.mockImplementation(() =>
      Promise.reject(new Error('oh noes!'))
    )
    expect.assertions(2)

    return request(server)
      .patch(baseURL + 'user/1')
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
        return null
      })
  })
})
