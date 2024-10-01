const crypto = require("crypto");
const { promisify } = require("util");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const appError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

const jwtToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

//   createSendToken(newUser, 201, res);

  const token = jwtToken(newUser._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});
