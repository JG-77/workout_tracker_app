const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create a sub-schema for exercises
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

//workout schema exercises and day
const workoutSchema = new Schema({
  exercises: [exerciseSchema],

  //date set to default 'now' value to show when workout was made
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
