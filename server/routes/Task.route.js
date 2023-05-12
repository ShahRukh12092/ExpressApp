const express = require("express");

const { createTask, getTasks } = require("../controllers/Task.controller");
const { validateCreateTask, validateQuery } = require("../validators/task");
const { Authenticate } = require("../middlewares/Auth");
const { validateInputData } = require("../utils/Helpers");

const router = express.Router();

router.post(
  "/create-task",
  Authenticate,
  validateCreateTask,
  validateInputData,
  createTask
);

router.get(
  "/list-tasks",
  Authenticate,
  validateQuery,
  validateInputData,
  getTasks
);

module.exports = router;
