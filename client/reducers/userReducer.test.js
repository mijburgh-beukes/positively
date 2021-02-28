import userReducer from './userReducer'

describe('userReducer', () => {
  test('initial state is an empty array', () => {
    const state = userReducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })
})
