import React from "react";
import Card from "../utils/Card";
import classes from "./ContestItem.module.css";
import codeforces from "../Assets/codeforces.png";
import codechef from "../Assets/codechef.jpg";
import atcoder from "../Assets/atcoder.png";

const getName = (name) => {
  let shorterName = "";
  let i = 0;
  let big = false;
  for (const s of name) {
    if (i > 40) {
      big = true;
      break;
    }
    shorterName += s;
    i++;
  }
  if (big) shorterName += "...";
  return shorterName;
};

const ContestItem = (props) => {
  let image, link;
  if (props.ContestPlatform == "Codechef") {
    link =
      "https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests";
    image = <img src={codechef} alt="Codechef" id={classes.logo} />;
  } else if (props.ContestPlatform == "Codeforces") {
    link = "https://codeforces.com/contests";
    image = <img src={codeforces} id={classes.logo} />;
  } else {
    link = "https://atcoder.jp/contests/";
    image = <img src={atcoder} alt="Atcoder" id={classes.logo} />;
  }
  const date = new Date(props.ContestDate).toLocaleString(undefined, {
    timeZone: "Asia/Kolkata",
  });

  const contestClickHandler = () => {
    window.open(link, "_blank");
  };
  const name = getName(props.ContestName);
  return (
    <Card className={classes.container} onClick={contestClickHandler}>
      <div className={classes.name}>
        {image}
        <h2>{name}</h2>
      </div>
      <hr />
      <div className={classes.info}>
        <h4>Date: </h4>
        <p>{date}</p>
      </div>
      <div className={classes.info}>
        <h4>Duration: </h4>
        <p>{props.Contestlength}</p>
      </div>
      <div className={classes.info}>
        <h4>Rated Range: </h4>
        <p>{props.ContestRated}</p>
      </div>
    </Card>
  );
};

export default ContestItem;
