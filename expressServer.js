const express = require('express');
const helpers = require('./helperFunctions');

const app = express();

app.get('/mean', function findMean(req, res, next) {
  try {
    const nums = helpers.queryHandler(req.query.nums);
    const mean = helpers.calculateMean(nums);

    return res.json({
      operation: 'Mean',
      value: mean,
    });
  } catch (err) {
    return next(err);
  }
});

app.get('/median', function findMedian(req, res, next) {
  try {
    const nums = helpers.queryHandler(req.query.nums);
    const median = helpers.calculateMedian(nums);

    return res.json({
      operation: 'Median',
      value: median,
    });
  } catch (err) {
    return next(err);
  }
});

app.get('/mode', function findMode(req, res, next) {
  try {
    const nums = helpers.queryHandler(req.query.nums);
    const mode = helpers.calculateMode(nums);

    return res.json({
      operation: 'Mode',
      value: mode,
    });
  } catch (err) {
    return next(err);
  }
});

app.use((err, req, res, next) => {
  // Default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // Set the status & alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log('App on port 3000');
});
