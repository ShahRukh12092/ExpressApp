const Sequelize = require("sequelize");
const db = require("../configs/Database");

const Task = db.define(
  "task",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    }},{
    timestamps:true
  }
);

module.exports = Task;
