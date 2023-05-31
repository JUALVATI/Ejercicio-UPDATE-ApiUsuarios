const express = require("express");

const router = express.Router();

const userController = require ("../controllers/userController");

const authController = require("../controllers/authController");

router.get('/', userController.getAllUsers);

router.post('/', userController.CreateUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
