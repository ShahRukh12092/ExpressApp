const { check} = require("express-validator");

module.exports.validateCreateTask = [
    check("data.name")
      .exists()
      .withMessage("Task name is required")
      .notEmpty()
      .withMessage('Task name should not be empty')
     ];