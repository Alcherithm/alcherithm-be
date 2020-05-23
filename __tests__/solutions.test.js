const { getSolution, getSolutions, getUser, getChallenge } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('Solution routes', () => {
  it('creates a solution', async() => {
    const solution = await getSolution();
    const user = await getUser();
    const challenge = await getChallenge();

    return request(app)
      .post('/api/v1/solutions')
      .send({
        userId: user._id,
        challengeId: challenge._id,
        passed: true,
        solution: `
export const greeting = word => {
    return word.toUpperCase();
};

export const speaker = (message, callback) => {
    return callback(message);
    };
}`
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          userId: user._id,
          challengeId: challenge._id,
          passed: true,
          solution: `
export const greeting = word => {
    return word.toUpperCase();
};

export const speaker = (message, callback) => {
    return callback(message);
    };
}`,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0
        });
      });
  });

  it('gets solutions by challengeId', async() => {
    const challenge = await getChallenge();
    const solutions = await getSolutions({ challengeId: challenge._id });
    const user = await getUser();

    return request(app)
      .get(`/api/v1/solutions/${challenge._id}`)
      .then(res => {
        expect(res.body).toEqual(solutions);
      });
  });

});
