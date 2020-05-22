const { getChallenges, getChallenge } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('challenge routes', () => {

  it('gets all challenges', async() => {
    const challenges = await getChallenges();

    return request(app)
      .get('/api/v1/challenges')
      .then(res => {
        expect(res.body).toEqual(challenges);
      });
  });

  it('gets a challenge by id', async() => {
    const challenge = await getChallenge();

    return request(app)
      .get(`/api/v1/challenges/${challenge._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...challenge
        });
      });
  });
});

