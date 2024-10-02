const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const userRouter = express.Router();

userRouter.route("/sign-up").post(authController.signup);
userRouter.route("/sign-in").post(authController.singIn);

module.exports = userRouter;
