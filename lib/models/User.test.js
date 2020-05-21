const User = require('./User');

describe('User model', () => {
  it('has a required firstName', () => {
    const user = new User();
    const { errors } = user.validateSync();

    expect(errors.firstName.message).toEqual('Path `firstName` is required.');
  });

  it('has a required lastName', () => {
    const user = new User();
    const { errors } = user.validateSync();

    expect(errors.lastName.message).toEqual('Path `lastName` is required.');
  });

  it('has a required email', () => {
    const user = new User();
    const { errors } = user.validateSync();

    expect(errors.email.message).toEqual('Email is required.');
  });

  it('has a required passwordHash', () => {
    const user = new User();
    const { errors } = user.validateSync();

    expect(errors.passwordHash.message).toEqual('Path `passwordHash` is required.');
  });
});
