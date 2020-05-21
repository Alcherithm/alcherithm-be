const Solution = require('./Solution.js');

describe('Solution model', () => {
  it('has required userId', () => {
    const solution = new Solution();
    const { errors } = solution.validateSync();

    expect(errors.userId.message).toEqual('Path `userId` is required.');
  });
  
});
  
