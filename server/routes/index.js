const router = require('express').Router();

// Route Imports
const companies = require('./companies');
const tokens = require('./tokens');

// Routes
router.use('/api/companies', companies);
router.use('/api/tokens', tokens);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: "matador api" });
});

module.exports = router;