import React from "react";
import Backdrop from "./Backdrop";
import classes from "./error.module.css";
import error from "../Assets/error.jpg";
import ReactDOM from "react-dom";

const Error = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div class="addError">
          <div class={classes.one}>
            <div class={classes.img}>
              <img src={error} alt="" height="300vw" />
            </div>
            <div class={classes.eror1}>
              <h1>OOPS..</h1>
              <h1>{props.error} :(</h1>
            </div>
          </div>
        </div>,
        document.getElementById("error-overlay")
      )}
      <Backdrop />
    </>
  );
};

export default Error;
