const Challenge = require('./Challenge');
require('dotenv').config();

describe('Challenge model', () => {
  
  it('has required starterCode', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.starterCode.message).toEqual('Path `starterCode` is required.');
  });

  it('has a required category', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.category.message).toEqual('Path `category` is required.');
  });

  it('has a required challengeNumber', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.challengeNumber.message).toEqual('Path `challengeNumber` is required.');
  });
});
