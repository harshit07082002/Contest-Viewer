const schedule = require("node-schedule");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const UpdateContestData = require("./controller/FetchContestData");
const contestRouter = require("./router/contestRouter");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
//Starting the Server

app.listen(process.env.PORT, () => {
  console.log("Server Started!!");
});

//Connecting Database
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((res) => {
    console.log("connection Succesful");
  })
  .catch((e) => {
    console.log("error");
  });

app.use("/api/v1/contestData", contestRouter);

// Updates Contests Data every Day
schedule.scheduleJob("* * * * *", UpdateContestData);

//Server Error
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
