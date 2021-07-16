const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({});

const Exercises = mongoose.model('Exercises', exerciseSchema);

module.exports = Exercises;
