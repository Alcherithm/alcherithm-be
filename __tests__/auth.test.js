require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('auth routes', () => {
  it('signs up a user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Loki',
        lastName: 'Goldman',
        email: 'loki@domain.com',
        password: 'thor',
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          firstName: 'Loki',
          lastName: 'Goldman',
          email: 'loki@domain.com',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          signupDate: expect.any(String),
          sessionDates: expect.any(Array),
          sessionDurations: expect.any(Array),
        });
      });
  });
});
