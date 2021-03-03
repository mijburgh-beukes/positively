const LocalStrategy = require('passport-local').Strategy
const { getUserByName } = require('./db/db')

function initialize (passport) {
  const authenticateUser = async (fname, sname, done) => {
    const user = await getUserByName(fname)
    if (user.length < 1) {
      done(null, false, { message: 'Incorrect user' })
    } else if (user[0].lastName === sname) {
      done(null, user)
    } else {
      done(null, false, { message: 'No match' })
    }
  }
  passport.use(new LocalStrategy({ usernameField: 'fname', passwordField: 'sname' }, authenticateUser))
  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })
}

module.exports = initialize
