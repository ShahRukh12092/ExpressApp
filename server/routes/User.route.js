const express = require("express");

const usersController = require("../controllers/User.controller");
const {} = require("../validators/user");

const router = express.Router();

router.post("/register",usersController.registerUser);
router.post("/login",usersController.login);
router.get("/user",usersController.getUser);

module.exports = router;

