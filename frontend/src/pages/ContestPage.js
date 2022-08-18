import React, { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../utils/LoadingScreen";
import axios from "axios";
import Error from "../utils/Error";
import ContestList from "../components/ContestList";
import Filter from "../components/Filter";
import Slider from "../components/Slider";

const filterData = (data) => {
  let filetedData = [];
  data.forEach((element) => {
    const data1 = new Date(element.ContestDate);
    const curData = new Date();
    if (data1 >= curData) {
      filetedData.push(element);
    }
  });
  return filetedData;
};

const ContestPage = () => {
  const [contestDetails, contestDetailsHandler] = useState([]);
  const [isLoading, loaderHandler] = useState(false);
  const [error, ErrorHandler] = useState(null);
  const [filteredList, changeFilteredList] = useState([]);

  const changeContestList = (platform) => {
    if (platform === "All Contest") {
      changeFilteredList(contestDetails);
    } else {
      let list = [];
      contestDetails.forEach((element) => {
        if (element.ContestPlatform === platform) list.push(element);
      });
      changeFilteredList(list);
    }
  };

  //Fetching Contest Details

  useEffect(() => {
    async function fetchText() {
      loaderHandler(true);
      const data = await axios({
        method: "GET",
        url: "http://localhost:8000/api/v1/contestData",
      });
      const filteredData = filterData(data.data.data.contests);
      loaderHandler(false);
      contestDetailsHandler(filteredData);
      changeFilteredList(filteredData);
    }
    fetchText().catch((error) => {
      loaderHandler(false);
      ErrorHandler(error.message);
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && error && <Error error={error} />}
      {!isLoading && !error && <Slider />}
      {!isLoading && !error && <Filter changeContestList={changeContestList} />}
      {!isLoading && !error && <ContestList contests={filteredList} />}
    </>
  );
};

export default ContestPage;
