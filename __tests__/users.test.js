const { getUsers } = require('../db/data-helpers');

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

  it('gets an user by id', async() => {
    const user = await getUsers();

    return request(app)
      .get(`/api/v1/users/${user._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...user
        });
      });
  });

  it('deletes an user by id', async() => {
    const user = await getUsers();

    return request(app)
      .delete(`/api/v1/users/${user._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...user
        });
      });
  });

});
