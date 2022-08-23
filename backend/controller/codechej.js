const puppeteer = require("puppeteer");
const { GetMonthIndex } = require("./utils");

const extractDate = (contestDate) => {
  const newDate = contestDate.split(/\r?\n/);
  const date = newDate[0].split(" ");
  const day = parseInt(date[0]);
  const month = GetMonthIndex(date[1]);
  const year = parseInt(date[2]);
  const time = newDate[1].split(" ")[1];
  const hour = parseInt(time.split(":")[0]);
  const minute = parseInt(time.split(":")[1]);
  const FinalDate = new Date(year, month, day, hour, minute);
  return FinalDate;
};

const extractRating = (contestRating) => {
  const rating = contestRating.split("(");
  return rating[1].split(")")[0];
};

module.exports = getCodechefContests = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();

    //Visit Codechef
    await page.goto(
      "https://www.codechef.com/contests/?itm_medium=navmenu&itm_campaign=allcontests"
    );
    await page.waitForSelector("#future-contests-data tr");

    //Fetch Contst Details
    const contestDetails = await page.evaluate(() => {
      const List = document.querySelectorAll("#future-contests-data tr");
      const Details = [];
      //Traverse over each contest
      List.forEach((element) => {
        const temp = element.querySelectorAll("td");
        const ans = [];
        temp.forEach((el) => {
          ans.push(el.innerText);
        });
        Details.push(ans);
      });
      const FinalInfo = [];
      for (let i = 0; i < Details.length; i++) {
        const element = Details[i];
        const temp = [];
        element.forEach((e) => {
          temp.push(e);
        });
        FinalInfo.push(temp);
      }
      return FinalInfo;
    });
    await browser.close();

    //Making Data to be savable at the Database
    let temp = [];
    contestDetails.forEach((element) => {
      let obj = {
        ContestPlatform: "Codechef",
        ContestName: element[1],
        ContestDate: extractDate(element[2]),
        Contestlength: element[3],
        ContestRated: extractRating(element[1]),
      };
      temp.push(obj);
    });

    //Returning the Data
    return temp;
  } catch (error) {
    console.log("⚠️" + error.message + "⚠️");
  }
};
