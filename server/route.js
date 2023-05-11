const express = require("express");

const usersRouter = require("./routes/User.route");
const tasksRouter = require("./routes/Task.route");

const router = express.Router();

router.use(usersRouter);
router.use(tasksRouter);

module.exports = router;
