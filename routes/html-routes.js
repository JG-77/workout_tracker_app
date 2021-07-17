const router = require('express').Router();
//const Workout = require('../models/workout');

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname + './public/exercise.html'));
});

module.exports = router;
