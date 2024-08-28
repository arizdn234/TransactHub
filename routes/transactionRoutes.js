const express = require('express');
const { getTransactions } = require('../controllers/transaction.controller');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, getTransactions);

module.exports = router;
