const express = require("express");

const {login,registerUser,getUser}= require("../controllers/User.controller");
const {validateRegisterUser,validateLogin} = require("../validators/user");
const {validateInputData} =require('../utils/Helpers')
const { Authenticate } = require("../middlewares/Auth");

const router = express.Router();

router.post("/register",validateRegisterUser,validateInputData, registerUser);
router.post("/login",validateLogin,validateInputData, login);

router.get("/user",Authenticate,getUser);

module.exports = router;

