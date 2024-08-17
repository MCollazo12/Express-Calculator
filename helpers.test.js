const { calculateMean, calculateMedian, calculateMode } = require('./helperFunctions'); 

describe('Statistical Functions', () => {
  describe('calculateMean', () => {
    test('calculates the mean of positive numbers', () => {
      expect(calculateMean([1, 2, 3, 4, 5])).toBe(3);
    });

    test('calculates the mean of negative numbers', () => {
      expect(calculateMean([-1, -2, -3, -4, -5])).toBe(-3);
    });

    test('calculates the mean of mixed positive and negative numbers', () => {
      expect(calculateMean([-10, -5, 0, 5, 10])).toBe(0);
    });

    test('calculates the mean of decimal numbers', () => {
      expect(calculateMean([1.5, 2.5, 3.5])).toBe(2.5);
    });

    test('returns NaN for an empty array', () => {
      expect(calculateMean([])).toBe(NaN);
    });
  });

  describe('calculateMedian', () => {
    test('calculates the median of an odd number of integers', () => {
      expect(calculateMedian([1, 3, 2, 5, 4])).toBe(3);
    });

    test('calculates the median of an even number of integers', () => {
      expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
    });

    test('calculates the median of decimal numbers', () => {
      expect(calculateMedian([1.5, 2.5, 3.5, 4.5])).toBe(3);
    });

    test('calculates the median of negative numbers', () => {
      expect(calculateMedian([-5, -2, -1, -3, -4])).toBe(-3);
    });

    test('returns the single value for an array with one element', () => {
      expect(calculateMedian([5])).toBe(5);
    });

    test('throws an error for an empty array', () => {
      expect(calculateMedian([])).toBe(NaN);
    });
  });

  describe('calculateMode', () => {
    test('finds the mode in an array with a single mode', () => {
      expect(calculateMode([1, 2, 2, 3])).toBe(2);
    });

    test('finds the mode with negative numbers', () => {
      expect(calculateMode([-1, -2, -2, -3])).toBe(-2);
    });

    test('finds the mode with decimal numbers', () => {
      expect(calculateMode([1.5, 2.5, 2.5, 3.5])).toBe(2.5);
    });

    test('returns the only element for an array with one element', () => {
      expect(calculateMode([5])).toBe(5);
    });

    test('returns undefined for an empty array', () => {
      expect(calculateMode([])).toBeUndefined();
    });
  });
});
