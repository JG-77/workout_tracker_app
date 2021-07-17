const router = require('express').Router();
//const Workout = require('../models/workout');

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname + '/exercise.js'));
});

module.exports = router;
