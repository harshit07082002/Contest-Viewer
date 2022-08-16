import React, { useState } from "react";
import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { CSSTransition } from "react-transition-group";

const NavBar = () => {
  const [sidebarOpen, setSideBar] = useState(false);
  const sideBarOnClick = () => {
    if (sidebarOpen) setSideBar(false);
    else setSideBar(true);
  };
  return (
    <nav>
      <h1 className={classes.heading}>CONTEST VIEWER</h1>
      <NavLinks />
      <CSSTransition
        in={sidebarOpen}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <NavLinks className={classes.container2} />
      </CSSTransition>
      <div className={classes.sidebar} onClick={sideBarOnClick}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
    </nav>
  );
};

export default NavBar;
