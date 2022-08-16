const getCodeforcesContest = require("./codeforces");
const getAtcoderContests = require("./atcoder");
const getCodechefContests = require("./codechej");
const Contest = require("../Models/contestModels");

module.exports = UpdateContestData = async () => {
  try {
    const codeforcesData = await getCodeforcesContest();
    const atcoderData = await getAtcoderContests();
    const codechefData = await getCodechefContests();

    const data = [...codechefData, ...atcoderData, ...codeforcesData];

    //Deleting existing Data
    await Contest.deleteMany({});

    //Adding new Data
    const contest = new Contest({
      contests: data,
    });
    await contest.save();
    console.log("Data Updated ✅");
  } catch (error) {
    console.log("⚠️" + error.message + "⚠️");
  }
};
