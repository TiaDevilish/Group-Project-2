const express = require('express');
var isAuthenticated = require("../config/middleware/isAuthenticated");

const router = express.Router();

const bookController = require('../controller/bookController');

router.post('/create', isAuthenticated,  bookController.createBook);

router.get('/search' , isAuthenticated, bookController.searchBook);

router.get('/:bookId' , isAuthenticated, bookController.getBookById);

router.post('/:bookId' , isAuthenticated, bookController.editBook);

router.delete('/:bookId' , isAuthenticated, bookController.deleteBook);

module.exports = router;