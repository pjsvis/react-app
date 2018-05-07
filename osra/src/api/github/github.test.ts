import * as github from './github';

describe('#fetchCurrentUser() using Promises', () => {
  it('should load current users data', () => {
    return github.fetchCurrentUser()
    .then(data => {
      expect(data).toBeDefined();
      // tslint:disable-next-line:no-console
      console.log(data.data);
    })
  })
})

// A simple example test
describe('#fetchMembers() using Promises', () => {
  it('should load members data', () => {
    return github.fetchMembers('pjsvis')
    .then(data => {
      expect(data).toBeDefined()
    })
  })
})