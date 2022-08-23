const puppeteer = require("puppeteer");
const Contest = require("../Models/contestModels");
const { GetMonthIndex, extractLength } = require("./utils");

const extractDate = (contestDate) => {
  const array = contestDate.split(" ");
  const date = array[0],
    time = array[1].split(":");
  const dateArray = date.split("/");
  const month = GetMonthIndex(dateArray[0]);
  const day = parseInt(dateArray[1]);
  const year = parseInt(dateArray[2]);
  const hour = parseInt(time[0]);
  const minute = parseInt(time[1].split("U")[0]);
  const newDate = new Date(year, month, day, hour, minute);
  return newDate;
};

const extractRatings = (name) => {
  const rating = name.split("(");
  if (rating.length < 2) return "";
  const value = rating[1].split(")")[0];
  return value;
};

module.exports = getCodeforcesContest = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();

    //Visit Codeforces
    await page.goto("https://codeforces.com/contests");
    await page.waitForSelector(".contestList .datatable");

    //Fetch Contests Details ok
    const contestDetails = await page.evaluate(() => {
      const upperList = document.querySelectorAll(".contestList .datatable");
      const List = upperList[0].querySelectorAll("div table tbody tr");
      const Details = [];
      //Traverse over each contest
      List.forEach((element) => {
        const TableData = element.querySelectorAll("td");
        const contestData = [];
        TableData.forEach((el) => {
          contestData.push(el.innerText);
        });
        Details.push(contestData);
      });
      const FinalInfo = [];
      for (let i = 1; i < Details.length; i++) {
        const element = Details[i];
        let temp = [];
        temp.push(element[0]);
        temp.push(element[2]);
        temp.push(element[3]);
        FinalInfo.push(temp);
      }
      return FinalInfo;
    });
    await browser.close();

    //Making Data to be savable at the Database
    let temp = [];
    contestDetails.forEach((element) => {
      let obj = {
        ContestPlatform: "Codeforces",
        ContestName: element[0],
        ContestDate: extractDate(element[1]),
        Contestlength: element[2],
        ContestRated: extractRatings(element[0]),
      };
      temp.push(obj);
    });

    //Returning the Data
    return temp;
  } catch (error) {
    console.log("⚠️" + error.message + "⚠️");
  }
};
