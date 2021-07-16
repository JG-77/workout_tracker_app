const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  duration: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Exercises = mongoose.model('Exercises', exerciseSchema);

module.exports = Exercises;
