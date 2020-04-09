const express = require('express');
const isAuthenticated = require("../config/middleware/isAuthenticated");

const router = express.Router();

const cartController = require('../controller/cartController');

router.post('/add/:bookId', isAuthenticated, cartController.addToCart);

router.get('/', isAuthenticated, cartController.getCart);

router.delete('/:bookId', isAuthenticated, cartController.delete);

module.exports = router;