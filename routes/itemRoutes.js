const express = require('express');
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/item.controller.js');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticate, createItem);
router.get('/', authenticate, getItems);
router.put('/:itemId', authenticate, updateItem);
router.delete('/:itemId', authenticate, deleteItem);

module.exports = router;
