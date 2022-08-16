const schedule = require("node-schedule");
const express = require("express");
const UpdateContestData = require("./controller/FetchContestData");
const contestRouter = require("./router/contestRouter");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
//Starting the Server

app.listen(8000, () => {
  console.log("Server Started!!");
});

//Connecting Database
const DATABASE_PASSWORD = "QLUSH9iEOHVct05Z";
mongoose
  .connect(
    `mongodb+srv://Tiger:${DATABASE_PASSWORD}@cluster0.iu403uy.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/api/v1/contestData", contestRouter);

// Updates Contests Data every Day
// schedule.scheduleJob("* * * * *", UpdateContestData);
