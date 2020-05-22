const Challenge = require('./Challenge');
require('dotenv').config();

describe('Challenge model', () => {
  
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

  it('has required instructions', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.instructions.message).toEqual('Path `instructions` is required.');
  });

  it('has required starterCode', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.starterCode.message).toEqual('Path `starterCode` is required.');
  });

  it('has required qunitTest', () => {
    const challenge = new Challenge();
    const { errors } = challenge.validateSync();
    expect(errors.qunitTest.message).toEqual('Path `qunitTest` is required.');
  });
  
  it('has required resources object', () => {
    const resourceSchema = {};
    const challenge = new Challenge({ resources: resourceSchema });
    const { errors } = challenge.validateSync();
    expect(errors.resources.message).toEqual('Validation failed: overview: Path `overview` is required.');
  });
});
