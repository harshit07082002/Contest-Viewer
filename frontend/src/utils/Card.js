import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const Cardclass = `${classes.card} ${props.className}`;
  return (
    <div className={Cardclass} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
