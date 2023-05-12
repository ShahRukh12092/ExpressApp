const express = require("express");

const usersController = require("../controllers/User.controller");
const {validateRegisterUser,validateLogin} = require("../validators/user");
const {validateInputData} =require('../utils/Helpers')
const { Authenticate } = require("../middlewares/Auth");

const router = express.Router();

router.post("/register",validateRegisterUser,validateInputData, usersController.registerUser);
router.post("/login",validateLogin,validateInputData, usersController.login);

router.use(Authenticate);
router.get("/user",usersController.getUser);

module.exports = router;

