const express = require('express');
const { getProfile, updateUser } = require('../controllers/user.controller');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, getProfile);
router.put('/', authenticate, updateUser);

module.exports = router;
