const express = require('express');
const authenticate = require('../middleware/auth');
const { Dashboard } = require('../controllers/dashboard.controller');
const router = express.Router();

router.get('/', authenticate, Dashboard);

module.exports = router;
