import React from "react";
import Backdrop from "./Backdrop";
import classes from "./error.module.css";
import Card from "./Card";
import ReactDOM from "react-dom";

const Error = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Card className={classes.error}>
          <p>{props.error}</p>
          <p>Please Try again Later :(</p>
        </Card>,
        document.getElementById("error-overlay")
      )}
      <Backdrop />
    </>
  );
};

export default Error;
