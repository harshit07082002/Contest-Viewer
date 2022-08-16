const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  contests: [
    {
      ContestPlatform: {
        type: String,
        required: [true, "There Should be a Platform Name!!"],
      },
      ContestName: {
        type: String,
        required: [true, "There should be a Contest Name!!"],
      },
      ContestDate: {
        type: Date,
        required: [true, "There should be Contest Date!!"],
      },
      Contestlength: {
        type: String,
        required: [true, "There should be a Contest Length!!"],
      },
      ContestRated: {
        type: String,
      },
    },
  ],
});

const Contest = mongoose.model("ContestData", contestSchema);
module.exports = Contest;
