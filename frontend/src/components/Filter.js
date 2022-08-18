import React from "react";
import classes from "./Filter.module.css";
import { useRef } from "react";

const Filter = (props) => {
  const filteredValue = useRef();
  const selectHandler = () => {
    props.changeContestList(filteredValue.current.value);
  };
  return (
    <div className={classes.box}>
      <select
        name="Filter"
        id="filter"
        ref={filteredValue}
        onChange={selectHandler}
      >
        <option value="All Contest">All Contest</option>
        <option value="Codeforces">Codeforces</option>
        <option value="Codechef">Codechef</option>
        <option value="Atcoder">Atcoder</option>
      </select>
    </div>
  );
};

export default Filter;
