const Solution = require('./Solution.js');

describe('Solution model', () => {
  it('has required userId', () => {
    const solution = new Solution();
    const { errors } = solution.validateSync();

    expect(errors.userId.message).toEqual('Path `userId` is required.');
  });

  it('has required challengeId', () => {
    const solution = new Solution();
    const { errors } = solution.validateSync();

    expect(errors.challengeId.message).toEqual('Path `challengeId` is required.');
  });

  it('has required passed', () => {
    const solution = new Solution();
    const { errors } = solution.validateSync();

    expect(errors.passed.message).toEqual('Path `passed` is required.');
  });

  it('has required solution', () => {
    const solution = new Solution();
    const { errors } = solution.validateSync();

    expect(errors.solution.message).toEqual('Path `solution` is required.');
  });
  
});
  
