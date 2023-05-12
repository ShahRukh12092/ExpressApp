const { check} = require("express-validator");

module.exports.validateRegisterUser = [
    check("data.email")
      .exists()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email must be a valid Email"),
    check("data.password")
      .exists()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];

  module.exports.validateLogin = [
    check("data.email")
      .exists()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email must be a valid email"),
    check("data.password").exists().withMessage("Password is required"),
  ];