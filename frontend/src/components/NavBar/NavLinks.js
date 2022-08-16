import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const activeClass = `${classes.li} ${classes.active}`;
  const unActiveClass = `${classes.li}`;
  const clas = `${classes.container} ${props.className}`;
  return (
    <div className={clas}>
      <NavLink
        to={"/contests"}
        className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
      >
        Contests
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
      >
        About
      </NavLink>
    </div>
  );
};

export default NavLinks;
