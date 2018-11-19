const minMaxSum = require('./minmaxSum');

describe('Min Max Sum', () => {
  it(' should result [0,0] for an array of zeros', () => {
    expect(minMaxSum([0,0,0,0,0])).toEqual([0,0]);
  });
  it(' should result [1,1] for an array of oness', () => {
    expect(minMaxSum([1,1,1,1,1])).toEqual([4,4]);
  });
  it(' should result [10,14] for input [1,2,3,4,5]', () => {
    expect(minMaxSum([1,2,3,4,5])).toEqual([10,14]);
  });
});