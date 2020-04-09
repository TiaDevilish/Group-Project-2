const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/search', isAuthenticated, userController.getAllUsers);
router.post('/create', userController.createUser);

router.get('/:userId', isAuthenticated, userController.getUserById);
router.post('/:userId', isAuthenticated, userController.editUser);
router.delete('/:userId', isAuthenticated, userController.deleteUser);

module.exports = router;