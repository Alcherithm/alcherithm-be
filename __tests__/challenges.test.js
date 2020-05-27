const { getChallenges, getChallenge, getUser } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('challenge routes', () => {
  it('gets all challenges and a user\'s completion data', async() => {
    const user = await getUser();
    const challenges = await getChallenges();

    return request(app)
      .get(`/api/v1/challenges?userId=${user._id}`)
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining(challenges.map(challenge => ({
          _id: expect.any(String),
          category: challenge.category,
          challengeNumber: challenge.challengeNumber,
          instructions: challenge.instructions,
          solutions: expect.any(Array)
        }))));
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

