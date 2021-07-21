const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: String,

  name: String,

  duration: Number,

  duration: Number,

  weight: Number,

  reps: Number,

  sets: Number,

  distance: Number,
});

const workoutSchema = new Schema({
  exercises: [exerciseSchema],

  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
