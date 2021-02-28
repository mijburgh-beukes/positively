const { formatUserData } = require('./formatter')
const _ = require('lodash')

const { mockUser, mockUser2 } = require('./testFixtures/mockUserData')

describe('formatUserData function', () => {
  it("should create a new user if user.id isn't present", () => {
    let userIds = []
    mockUser.forEach(user => userIds.push(user.user_id))
    let formattedUsers = formatUserData(mockUser)
    expect(formattedUsers.length).toEqual(_.sortedUniq(userIds).length)
  })

  it('should add a new habit if user.id is present', () => {
    let habitIds = []
    mockUser.forEach(user => habitIds.push(user.id))

    let formattedUsers = formatUserData(mockUser2)
    expect(formattedUsers[0].habits.length).toEqual(2)
  })
})
