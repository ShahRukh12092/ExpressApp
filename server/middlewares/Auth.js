const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const Helpers = require("../utils/Helpers");
const Models = require("../models");

module.exports.Authenticate = CatchAsync(async (req, res, next) => {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    if (!token)
      return next(new AppError("Invalid token, Please login again.", 401));
  
    const decode = Helpers.validateToken(token);
    if (!decode)
      return next(new AppError("Invalid token, Please login again.", 401));
  
    const user = await Models.User.findOne({ where: { id: decode.id } });
  
    if (!user) next(new AppError("User not found, Please login again.", 401));
  
    req.user = decode;
    next();
  });