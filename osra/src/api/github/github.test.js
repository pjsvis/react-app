import * as github from './github';

// NOTE: These tests will quickly exceed the github api limits and subsequently fail
// logged in user
describe('#fetchCurrentUser() using Promises', () => {
  it('should load current users data', () => {
    return github.fetchCurrentUser()
      .then(data => {
        expect(data).toBeDefined();
      })
  })
})

// members
describe('#fetchMembers() using Promises', () => {
  it('should load members data', () => {
    return github.fetchMembers('lemoncode')
      .then(data => {
        expect(data).toBeDefined()
      })
  })
})

// repos
describe('#fetchRepos() using Promises', () => {
  it('should load repo data', () => {
    return github.fetchMembers('lemoncode')
      .then(data => {
        expect(data).toBeDefined()
      })
  })
})