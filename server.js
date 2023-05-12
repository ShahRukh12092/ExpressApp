const dotenv = require("dotenv");
dotenv.config({ path: "./configs.env" });
const db = require("./server/configs/Database");
const app = require("./app");

db.authenticate()
  .then(() => {
    console.log(
      `Successfully connected with database ==> ${process.env.DB_NAME}`
    );
    if (process.env.DB_ASYNC) {
      db.sync({
        update: true,
      })
        .then(() => console.log("Database successfully synced"))
        .catch((error) => console.log("💥 Error while syncing", error));
    }

  })
  .catch((error) =>
    console.log("Error while connecting to the database", error)
  );

// starting the express server

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


// error handling of unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    db.close();
    process.exit(1);
  });
});

// error handling of uncaught exception
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  db.close();
  process.exit(1);
});

