const Models = require("../models");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const Helpers = require("../utils/Helpers");

module.exports.getTasks = CatchAsync(async (req, res, next) => {
  
  let tasks =await Models.Task.findAll()
  tasks =Helpers.convertToPlainJSObject(tasks)

  return res.status(201).json({
    status: "success",
    message: "Tasks are fetched successfully",
    data: {
      tasks
    },
  });
  
});

module.exports.createTask = CatchAsync(async (req, res, next) => {
    const {data:{name}} = req.body

    let task = await Models.Task.create({name})

    task =Helpers.convertToPlainJSObject(task)

    return res.status(201).json({
        status: "success",
        message: "You are successfully created task.",
        data: {
          task
        },
      });
});
