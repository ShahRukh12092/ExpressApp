const express = require("express");

const taskController = require("../controllers/Task.controller");
const { validateCreateTask } = require("../validators/task");
const { Authenticate } = require("../middlewares/Auth");
const { validateInputData } = require("../utils/Helpers");

const router = express.Router();

router.post(
  "/create-task",
  Authenticate,
  validateCreateTask,
  validateInputData,
  taskController.createTask
);

router.get("/list-tasks",Authenticate, taskController.getTasks);

module.exports = router;
