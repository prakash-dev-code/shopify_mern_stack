const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "emai is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required"],
    validate: {
      validator: function (v) {
        return validator.equals(v, this.password);
      },
      message: "Passwords do not match",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user", "staff", "employee", "manager"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

// check password is correct or not
userSchema.methods.correctPassword = async function (
  userPassword,
  userDbPassword
) {
  return await bcrypt.compare(userPassword, userDbPassword);
};
// check password is correct or not

module.exports = mongoose.model("User", userSchema);
