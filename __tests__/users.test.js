const { getUsers, getUser } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('user routes', () => {

  it('gets all users', async() => {
    const users = await getUsers();

    return request(app)
      .get('/api/v1/users/')
      .then(res => {
        expect(res.body).toEqual(users);
      });
  });

  it('gets challenge counts for a user', async() => {
    const user = await getUser();

    return request(app)
      .get(`/api/v1/users/${user._id}/counts`)
      .then(res => {
        expect(res.body).toEqual({
          attempted: expect.any(Number),
          failed: expect.any(Number),
          passed: expect.any(Number), 
          totalNumberOfChallenges: expect.any(Number)
        });
      });
  });

});
