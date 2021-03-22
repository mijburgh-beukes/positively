const request = require('supertest')

const db = require('../db/db')
const server = require('../server')

const baseURL = '/api/v1/habit/'

const mockHabit = {
  id: 1,
  title: 'test habit',
  description: 'this is a test habit',
  habitIcon: 'img icon',
  totalGoalCount: 42,
  priority: 5,
  goalCount: 3
}

jest.mock('../db/db')

describe('POST /api/v1/habit', () => {
  it('responds with 201 on successful creation of row', () => {
    db.addHabit.mockImplementation(() => Promise.resolve(1))
    db.getHabit.mockImplementation(() =>
      Promise.resolve({ id: 1, title: 'daily run' })
    )
    expect.assertions(2)
    return request(server)
      .post(baseURL)
      .send(mockHabit)
      .then(res => {
        expect(res.status).toBe(201)
        expect(res.body.id).toBe(1)
        return null
      })
  })

  it('responds with error if missing fields', () => {
    db.addHabit.mockImplementation(() => Promise.reject(new Error('oh noes!')))
    expect.assertions(2)
    return request(server)
      .post(baseURL)
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
    const mockChanges = { title: 'walking' }
    db.editHabit.mockImplementation(() => Promise.resolve(mockHabit))
    expect.assertions(1)
    return request(server)
      .patch(baseURL + '1')
      .send(mockChanges)
      .then(res => {
        expect(res.body).toEqual(mockHabit)
        return null
      })
  })

  it('should reject with status 500', () => {
    db.editHabit.mockImplementation(() => Promise.reject(new Error('oh noes!')))
    expect.assertions(2)
    return request(server)
      .patch(baseURL + '1')
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
        return null
      })
  })
})

describe('DELETE /api/v1/habit/:id', () => {
  it('should responds with a habit', () => {
    db.deleteHabit.mockImplementation(() => Promise.resolve('deleted'))
    expect.assertions(2)
    return request(server)
      .delete(baseURL + '1')
      .then(res => {
        expect(db.deleteHabit).toHaveBeenCalled()
        expect(res.body).toEqual('deleted')
        return null
      })
  })

  it('should reject with status 500', () => {
    db.deleteHabit.mockImplementation(() =>
      Promise.reject(new Error('oh noes!'))
    )
    expect.assertions(2)
    return request(server)
      .delete(baseURL + '1')
      .then(err => {
        expect(err.status).toEqual(500)
        expect(err.text).toEqual('DATABASE ERROR: oh noes!')
        return null
      })
  })
})
