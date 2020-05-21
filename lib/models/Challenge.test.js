const Challenge = require('./Challenge');
require('dotenv').config();

describe('Challenge model', () => {
  
  it('has required starterCode', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.starterCode.message).toEqual('Path `starterCode` is required.');
  });
});
