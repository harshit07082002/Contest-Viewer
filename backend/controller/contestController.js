const Contest = require("../Models/contestModels");

const SortOnBasisOfDate = (requiredData) => {
  requiredData.sort((a, b) => {
    return new Date(a.ContestDate) - new Date(b.ContestDate);
  });
};

exports.getAllContests = async (req, res, next) => {
  try {
    const data = await Contest.find({});
    const contestData = data[0].contests;
    SortOnBasisOfDate(contestData);
    res.status(200).json({
      status: "success",
      length: contestData.length,
      data: {
        contests: contestData,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
exports.getContests = async (req, res, next) => {
  try {
    const platform = req.params.platform;
    const data = await Contest.find({});
    const requiredData = [];
    data[0].contests.forEach((el) => {
      if (el.ContestPlatform == platform) requiredData.push(el);
    });
    SortOnBasisOfDate(requiredData);
    res.status(200).json({
      status: "success",
      length: requiredData.length,
      data: {
        contests: requiredData,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
