import React from "react";
import Loader from "./Loader";
import Backdrop from "./Backdrop";

const LoadingScreen = () => {
  return (
    <div>
      <Backdrop />
      <Loader />
    </div>
  );
};

export default LoadingScreen;
