const express = require("express");

const taskController = require("../controllers/Task.controller");
const {} = require("../validators/task");

const router = express.Router();

router.post("/create-task",taskController.createTask);
router.get("/list-tasks",taskController.getTasks);

module.exports = router;
