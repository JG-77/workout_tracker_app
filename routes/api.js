const router = require('express').Router();
const Workout = require('../models/workout');

//api route for getLastWorkout function
router.get('/api/workouts', (req, res) => {
  //aggregate() groups values from docs together
  Workout.aggregate([
    //$addFields adds a new field to our object
    // a sum of our exercises durations is added in the new field
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//api POST  route for createWorkout function
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
      console.log(body);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// api PUT route for addExercise function
router.put(`/api/workouts/:id`, ({ body, params }, res) => {
  //finds by id and updates exercises array
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkouts) => {
      -res.json(dbWorkouts);
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
    //sorts workouts from oldest to newest
    .sort({ _id: 1 })
    //limit the duration by 7 for the days of the week
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
