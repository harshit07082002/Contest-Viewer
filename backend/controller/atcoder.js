const puppeteer = require("puppeteer");
const { extractLength } = require("./utils");

const extractDate = (contestDate) => {
  const date = contestDate.split("-");
  const year = parseInt(date[0]);
  let month = parseInt(date[1]);
  month--;
  const day = parseInt(date[2].split("(")[0]);
  const time = date[2].split(" ");
  const hour = parseInt(time[1].split(":")[0]);
  const minute = parseInt(time[1].split(":")[1]);
  const newDate = new Date(year, month, day, hour, minute);
  return newDate;
};

module.exports = getAtcoderContests = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    //Visit Atcoder
    await page.goto("https://atcoder.jp/contests/");
    await page.waitForSelector("#contest-table-upcoming");

    //Fetch Contests Details
    const contestDetails = await page.evaluate(() => {
      const List = document.querySelectorAll(
        "#contest-table-upcoming div div table tbody tr"
      );
      const Details = [];
      //Traverse over each contest
      List.forEach((element) => {
        const TableData = element.querySelectorAll("td");
        let contestData = [];
        TableData.forEach((el) => {
          contestData.push(el.innerText);
        });
        Details.push(contestData);
      });
      return Details;
    });
    await browser.close();

    //Making Data to be savable at the Database
    let temp = [];
    contestDetails.forEach((element) => {
      let obj = {
        ContestPlatform: "Atcoder",
        ContestName: element[1],
        ContestDate: extractDate(element[0]),
        Contestlength: element[2],
        ContestRated: element[3],
      };
      temp.push(obj);
    });

    //Returning the Data
    return temp;
  } catch (error) {
    console.log("⚠️" + error.message + "⚠️");
    return [];
  }
};
