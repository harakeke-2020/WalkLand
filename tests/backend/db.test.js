const testEnv = require('./test-environment')
const db = require('../../server/db/db')

console.log(testEnv)
let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getPosts gets all posts', () => {
  const expected = 3
  return db.getUsers(testDb)
    .then(users => {
      console.log(users.length)
      const actual = users.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})