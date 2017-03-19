const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', {
    questions: [
      {
        predicate: 'You had a holiday romance and your next step will be…',
        answers: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          'Duis aute irure dolor in reprehenderit in voluptate.',
          'Excepteur sint occaecat cupidatat non proident.'
        ]
      },
      {
        predicate: 'You had a holiday romance and your next step will be…',
        answers: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          'Duis aute irure dolor in reprehenderit in voluptate.',
          'Excepteur sint occaecat cupidatat non proident.'
        ]
      }
    ]
  })
);

module.exports = router;
