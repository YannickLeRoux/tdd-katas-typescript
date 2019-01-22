const maxSubsetSum = require("./max-array-sum.ts");

describe("Max Array Sum", () => {
  it("should work with an array of 1", () => {
    expect(maxSubsetSum([2])).toBe(2);
  });
  it("should return the sum for an array of 2", () => {
    expect(maxSubsetSum([2, 5])).toBe(7);
  });
  it("should work with array of 3", () => {
    expect(maxSubsetSum([2, 6, 3])).toBe(5);
  })
  it("should work with array of 4", () => {
    expect(maxSubsetSum([2, 6, 3, 14])).toBe(20);
  })
  it('should work with an array of 5', () => {
    expect(maxSubsetSum([-2, 1, 3, -4, 5])).toBe(8);
  })
  it('should work with an array of 6 using a sum of 3 items', () => {
    expect(maxSubsetSum([-2, 1, 4, -4, 1, -3, 2])).toBe(7);
  });
  it('should be able to skip to any other non adjacent number, test case 2 in hackerrank', () => {
    expect(maxSubsetSum([3, 5, -7, 8, 10])).toBe(15);
  })
});
