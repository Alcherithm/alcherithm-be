const { getAgent } = require('../db/data-helpers');

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
          signUpDate: expect.any(String),
          sessionDates: expect.any(Array),
          sessionDurations: expect.any(Array)
        });
      });
  });
  
  it('logs in a user', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'charlotte@domain.com',
        password: 'butters13',
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          firstName: 'Charlotte',
          lastName: 'Katze',
          email: 'charlotte@domain.com',
          cohort: 'Winter 2020',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          signUpDate: expect.any(String),
          sessionDates: expect.any(Array),
          sessionDurations: expect.any(Array)
        });
      });
  });

  it('verifies a logged in user', () => {
    return getAgent()
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          firstName: 'Charlotte',
          lastName: 'Katze',
          email: 'charlotte@domain.com',
          cohort: 'Winter 2020',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          signUpDate: expect.any(String),
          sessionDates: expect.any(Array),
          sessionDurations: expect.any(Array)
        });
      });
  });
});
