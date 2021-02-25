const request = require('supertest')

const db = require('../db/db')
const server = require('../server')

const baseURL = '/api/v1'

const habit = {
  title: 'test habit',
  description: 'this is a test habit',
  habitIcon: 'img icon',
  totalGoalCount: 42,
  priority: 5,
  goalCount: 3
}

jest.mock('../db/db', () => {
  return {
    addHabit: jest.fn()
  }
})

describe('POST /api/v1/habit', () => {
  it('responds with 201 on successful creation of row', () => {
    db.addHabit.mockImplementation(() => Promise.resolve())
    expect.assertions(1)
    return request(server)
      .post(baseURL + '/habit')
      .send(habit)
      .then(res => {
        expect(res.status).toBe(201)
        return null
      })
  })

  it('responds with error if missing fields', () => {
    db.addHabit.mockImplementation(() => Promise.reject())
    expect.assertions(1)
    return request(server)
      .post(baseURL + '/habit')
      .send({
        field: 'bad test data'
      })
      .then(err => {
        expect(err.status).toEqual(500)
        return null
      })
  })
})
