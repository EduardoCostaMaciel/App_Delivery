const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/user');
const isAuthorized = require('../middlewares/validateGenerals');

const userRouter = express.Router();

userRouter.get('/', rescue(userController.getAllUser));
userRouter.delete(
  '/:id',
  isAuthorized.verifyToken,
  rescue(userController.deleteUser)
);

module.exports = userRouter;
