const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

module.exports.convertToPlainJSObject = (item) => {
  return JSON.parse(JSON.stringify(item));
};

module.exports.validateInputData = (req, _res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) next(new AppError(result.array()[0].msg, 400));
  else next();
};
