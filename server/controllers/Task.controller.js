const Models = require("../models");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const Helpers = require("../utils/Helpers");
const Paginate = require("../utils/Paginate");

const getTasks = CatchAsync(async (req, res, next) => {
  const { query } = req;

  const pagination = await Paginate(Models.Task, {}, query.page, query.limit);

  let tasks = await Models.Task.findAll({
    attributes: ["id", "name"],
    order: [["createdAt", "DESC"]],
    limit: pagination.limit,
    offset: pagination.offset,
  });
  tasks = Helpers.convertToPlainJSObject(tasks);

  return res.status(201).json({
    status: "success",
    message: "Tasks are fetched successfully",
    data: {
      tasks,
      pagination,
    },
  });
});

const createTask = CatchAsync(async (req, res, next) => {
  const {
    data: { name },
  } = req.body;

  let task = await Models.Task.create({ name });

  task = Helpers.convertToPlainJSObject(task);

  return res.status(201).json({
    status: "success",
    message: "Task created successfully.",
    data: {
      task: { id: task.id, name: task.name },
    },
  });
});

module.exports = { createTask, getTasks };
