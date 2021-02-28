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
    addHabit: jest.fn(),
    editHabit: jest.fn(),
    deleteHabit: jest.fn()
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
    db.addHabit.mockImplementation(() => Promise.reject(new Error('oh noes!')))
    expect.assertions(2)
    return request(server)
      .post(baseURL + '/habit')
      .send({
        field: 'bad test data'
      })
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
        return null
      })
  })
})

describe('PATCH /api/v1/habit/:id', () => {
  it('should responds with a habit', () => {
    db.editHabit.mockImplementation(() => Promise.resolve('hi'))
    expect.assertions(1)
    return request(server)
      .patch(baseURL + '/habit/1')
      .then(res => {
        expect(res.body).toEqual('hi')
      })
  })

  it('should reject with status 500', () => {
    db.editHabit.mockImplementation(() => Promise.reject(new Error('oh noes!')))
    expect.assertions(2)
    return request(server)
      .patch(baseURL + '/habit/1')
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
      })
  })
})

describe('DELETE /api/v1/habit/:id', () => {
  it('should responds with a habit', () => {
    db.deleteHabit.mockImplementation(() => Promise.resolve('deleted'))
    expect.assertions(1)
    return request(server)
      .delete(baseURL + '/habit/1')
      .then(res => {
        expect(res.body).toEqual('deleted')
      })
  })

  it('should reject with status 500', () => {
    db.deleteHabit.mockImplementation(() =>
      Promise.reject(new Error('oh noes!'))
    )
    expect.assertions(2)
    return request(server)
      .delete(baseURL + '/habit/1')
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
      })
  })
})
