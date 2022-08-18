import React from "react";
import ContestItem from "./ContestItem";
import classes from "./ContestList.module.css";
import Card from "../utils/Card";

const ContestList = (props) => {
  let list = props.contests.map((element) => {
    return <ContestItem key={element._id} {...element} />;
  });
  if (props.contests.length == 0) {
    list = (
      <Card className={classes.card}>
        <p className={classes.noContest}>No Contests Present at the moment!!</p>
      </Card>
    );
  }
  return <div className={classes.container}>{list}</div>;
};

export default ContestList;
