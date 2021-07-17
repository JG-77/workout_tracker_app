const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
  ])
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
