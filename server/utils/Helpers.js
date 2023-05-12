const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");
const jsonwebtoken = require("jsonwebtoken");

module.exports.convertToPlainJSObject = (item) => {
  return JSON.parse(JSON.stringify(item));
};

module.exports.validateInputData = (req, _res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) next(new AppError(result.array()[0].msg, 400));
  else next();
};

module.exports.removePassword = (object) => {
  return { ...object, password: undefined };
};

module.exports.generateToken = (user) => {
  return jsonwebtoken.sign(user, process.env.JSON_TOKEN, {
    expiresIn: "10d",
  });
};