import React from "react";
import Card from "../utils/Card";
import { useEffect } from "react";

const filterData = (data) => {
  const filetedData = [];
};

const ContestPage = () => {
  //Fetching Contest Details
  useEffect(() => {
    async function fetchText() {
      let response = await fetch("http://localhost:8000/api/v1/contestData");
      let data = await response.json();
      //   const filteredData = filterData(data);
      console.log(data);
    }
    fetchText().catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <>
      <Card>hello</Card>
    </>
  );
};

export default ContestPage;
