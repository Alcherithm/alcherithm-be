const { getChallenges } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('users routes', () => {
  describe('challenges routes', () => {

    it('gets all challenges', async() => {
      const challenges = await getChallenges();

      return request(app)
        .get('/api/v1/challenges')
        .then(res => {
          expect(res.body).toEqual(challenges);
        });
    });
  });
});
