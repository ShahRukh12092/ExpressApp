const { check, query } = require("express-validator");

module.exports.validateCreateTask = [
  check("data.name")
    .exists()
    .withMessage("Task name is required")
    .notEmpty()
    .withMessage("Task name should not be empty"),
];

module.exports.validateQuery = [
  query("limit")
    .optional()
    .isNumeric()
    .withMessage("limit should be valid number"),
  query("page")
    .optional()
    .isNumeric()
    .withMessage("page should be valid number"),
];
