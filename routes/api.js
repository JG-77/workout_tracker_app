const router = require('express').Router();
const Workout = require('../models/workout');

//api route for getLastWorkout function
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

//api route for createWorkout function
router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
      console.log(body);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//api route for getWorkoutsInRange function
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
