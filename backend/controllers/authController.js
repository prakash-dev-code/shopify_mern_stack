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

exports.singIn = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new appError("Please provide email and password", 404));

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user?.password))) {
    return next(new appError("Incorrect email or password", 401));
  }
  const token = jwtToken(user._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
});

exports.forgetPassword = async function (req, res, next) {
  const userByEmail = await User.findOne({ email: req.body.email });
  if (!userByEmail)
    return next(new appError("no user found with provided email", 404));

  const resetToken = await userByEmail.createResetPasswordToken();

  console.log(resetToken, "reset Token");

  await userByEmail.save({ validateBeforeSave: false });
};
exports.resetPassword = function (req, res, next) {};
