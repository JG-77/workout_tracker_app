const router = require('express').Router();
var path = require('path');

//generate exercise html page
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

//generate stats graph html page
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});

module.exports = router;
