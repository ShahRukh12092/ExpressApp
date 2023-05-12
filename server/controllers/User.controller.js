const Models = require("../models");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const Helpers = require("../utils/Helpers");

module.exports.getUser = CatchAsync(async (req, res, next) => {});
module.exports.registerUser = CatchAsync(async (req, res, next) => {
    const {data:{email},data:{password}} =req.body
    
});
module.exports.login = CatchAsync(async (req, res, next) => {});
