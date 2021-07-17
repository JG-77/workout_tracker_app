const router = require('express').Router();
var path = require('path');

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/exercise.html'));
});

module.exports = router;
