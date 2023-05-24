const findPairs = require('./findPairs');

describe('findPairs', () => {
  it('should return the valid pairs whose sum equals the target', () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const target = 12;
    const result = findPairs(numbers, target);
    console.log(result);

    const expectedResult = new Set([[12, 0], [7, 5], [16, -4]].map(JSON.stringify));
    const actualResult = new Set(result.map(JSON.stringify));

    console.log('expectedResult',expectedResult);
    console.log('actualResult', actualResult);

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return an empty array if no valid pairs exist', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 10;
    const result = findPairs(numbers, target);
    expect(result).toEqual([]);
  });

  it('should handle negative numbers and zero as target', () => {
    const numbers = [-5, 10, -2, 7, -10, -3];
    const target = 0;
    const result = findPairs(numbers, target);
    expect(new Set(result.map(JSON.stringify))).toEqual(new Set([[-10, 10]].map(JSON.stringify)));
  });

  it('should handle empty input array', () => {
    const numbers = [];
    const target = 5;
    const result = findPairs(numbers, target);
    expect(result).toEqual([]);
  });

});
