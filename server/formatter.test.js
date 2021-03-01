const { formatUserData } = require('./formatter')
const _ = require('lodash')

const { mockUser, mockUser2 } = require('./testFixtures/mockUserData')

describe('formatUserData function', () => {
  it("should create a new user if user.userId isn't present", () => {
    const userIds = []
    mockUser.forEach(user => userIds.push(user.user_id))
    const formattedUsers = formatUserData(mockUser)
    expect(formattedUsers).toHaveLength(_.sortedUniq(userIds).length)
  })

  it('should add a new habit if user.userId is present', () => {
    const habitIds = []
    mockUser.forEach(user => habitIds.push(user.userId))

    const formattedUsers = formatUserData(mockUser2)
    expect(formattedUsers[0].habits).toHaveLength(2)
  })
})
