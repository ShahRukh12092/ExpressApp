const Models = require("../models");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const Helpers = require("../utils/Helpers");

module.exports.getUser = CatchAsync(async (req, res, next) => {
  const {user} =req

  let userData = await Models.User.findOne({ where: { id:user.id } });

  userData = Helpers.convertToPlainJSObject(userData);
  userData = Helpers.removePassword(userData);

  return res.status(200).json({
    status: "success",
    message: "You are successfully logged in.",
    data: {
      user:userData
    },
  });
});

module.exports.registerUser = CatchAsync(async (req, res, next) => {
    const {data:{email},data:{password}} =req.body
    let user = await Models.User.findOne({ where: { email } });
    if (user) return next(new AppError("User with this email already Exists", 400));
    
    
    user = await Models.User.create({ email,password });
      
    user = Helpers.convertToPlainJSObject(user);
    user = Helpers.removePassword(user);
    
    return res.status(201).json({
      status: "success",
      message: "User added successfully",
      data: {
         user
      },
    });
});
    

module.exports.login = CatchAsync(async (req, res, next) => {
    
    const { email, password } = req.body.data;

    let user = await Models.User.findOne({ where: { email } });
  
    if (!user) return next(new AppError("Email or password is incorrect", 400));
  
    const validPassword = await user.validatePassword(password);
  
    if (!validPassword)
      return next(new AppError(`Email or password is incorrect`, 404));
  
    const token = Helpers.generateToken({
      id: user.id,      
    });
  
    return res.status(200).json({
      status: "success",
      message: "You are successfully logged in.",
      data: {
        jwt:token
      },
    });
});
