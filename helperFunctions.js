const ExpressError = require('./expressError')

// Convert query string numbers into an array of floats
function queryHandler(stringNums) {
  let nums = stringNums.split(',');

  // Check if the input string is empty
  if (!stringNums) {
    throw new ExpressError('Please provide a list of numbers.', 400);
  }

  // Validate that all elements are non-empty numbers
  if (nums.some((num) => num.trim() === '' || isNaN(num))) {
    throw new ExpressError('All parameter values must be numbers', 400);
  }

  // Convert each valid string to a float and return a new array with map
  return nums.map((num) => parseFloat(num.trim()));
}

// Calculate the mean (average) of an array of numbers
function calculateMean(nums) {
  // Use reduce to calculate the sum and number count simultaneously
  const { sum, count } = nums.reduce(
    (acc, num, index) => ({
      sum: acc.sum + Number(num),
      count: index + 1,
    }),
    { sum: 0, count: 0 }
  );

  // Return mean rounded to 2 decimal places
  return Math.round((sum / count) * 100) / 100;
}

// Calculate the middle value of an array of numbers
function calculateMedian(nums) {
  // Sort the array in ascending order
  const sortedArr = nums.map(Number).sort((a, b) => a - b);
  const middleIdx = Math.floor(sortedArr.length / 2);

  // If the total array length is even, average the two middle numbers
  // Otherwise, return the middle number
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middleIdx - 1] + sortedArr[middleIdx]) / 2;
  } else {
    return sortedArr[middleIdx];
  }
}

// Calculate the most frequent value of an array of numbers
function calculateMode(nums) {
  return nums.reduce(
    (acc, num) => {
      // Count the occurrences of each number
      acc.counts[num] = (acc.counts[num] || 0) + 1;

      // Update mode if this number occurs more frequently
      if (acc.counts[num] > acc.maxCount) {
        acc.maxCount = acc.counts[num];
        acc.mode = [num];
      } else if (acc.counts[num] === acc.maxCount) {
        // If it's a tie, push this number to the mode array
        acc.mode.push(num);
      }

      return acc;
    },
    { counts: {}, maxCount: 0, mode: [] }
  ).mode[0]; // Return the first mode if there are multiple
}

module.exports = {
  queryHandler,
  calculateMean,
  calculateMedian,
  calculateMode,
};
