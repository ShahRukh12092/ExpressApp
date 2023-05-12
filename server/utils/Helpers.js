const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");
const jsonwebtoken = require("jsonwebtoken");

const convertToPlainJSObject = (item) => {
  return JSON.parse(JSON.stringify(item));
};

const validateInputData = (req, _res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) next(new AppError(result.array()[0].msg, 400));
  else next();
};

const removePassword = (object) => {
  return { ...object, password: undefined };
};

const generateToken = (user) => {
  return jsonwebtoken.sign(user, process.env.JSON_TOKEN, {
    expiresIn: "10d",
  });
};

const validateToken = (token) => {
  return jsonwebtoken.verify(token, process.env.JSON_TOKEN);
};

module.exports ={
  convertToPlainJSObject,
  validateInputData,
  removePassword,
  generateToken,
  validateToken,
};
