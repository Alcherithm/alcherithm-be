const { getSolutions, getUser, getChallenge } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('Solution routes', () => {
  it('creates a solution', async() => {
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

  // it('gets solutions by user id and groups by challenge number', async() => {
  //   const solutions = await getSolutions();
  //   const userIds = solutions.map(solution => solution.userId);
  
  //   return request(app)
  //     .get(`/api/v1/solutions?userId=${userIds[0]}`)
  //     .then(res => {
  //       expect(res.body).toContainEqual(solutions.map(solution => ({
  //         __v: expect.any(Number),
  //         _id: expect.any(String),
  //         solutions: [
  //           {
  //             solution: solution.solution,
  //             passed: solution.passed,
  //             createdAt: solution.createdAt
  //           }
  //         ],
  //         challenge: {
  //           category: expect.any(String),
  //           challengeNumber: expect.any(Number),
  //           instructions: expect.any(String)
  //         }
  //       })));
  //     });
  // });  
 

  it('gets solutions by challenge id and user id', async() => {
    const challenge = await getChallenge();
    const solutions = await getSolutions({ challengeId: challenge._id });

    const userIds = solutions.map(solution => solution.userId);

    return request(app)
      .get(`/api/v1/solutions?challengeId=${challenge._id}&userId=${userIds[0]}`)
      .then(res => {
        expect(res.body).toContainEqual({
          _id: solutions[0]._id,
          createdAt: solutions[0].createdAt,
          passed: solutions[0].passed,
          solution: solutions[0].solution
        });
      });
  });


  it('gets solutions by challenge id', async() => {
    const challenge = await getChallenge();
    const solutions = await getSolutions({ challengeId: challenge._id, passed: true });

    return request(app)
      .get(`/api/v1/solutions?challengeId=${challenge._id}`)
      .then(res => {
        expect(res.body).toEqual(solutions.map(solution => ({
          _id: solution._id,
          solution: solution.solution
        })));
      });
  });
});
