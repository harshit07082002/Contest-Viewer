import React from "react";
import Card from "../utils/Card";
import classes from "./AboutPage.module.css";

const About = () => {
  return (
    <Card className={classes.container}>
      <h1>About Us</h1>
      <hr />
      <p>
        hello
        {process.env.REACT_APP_BACKEND_URL}
        Contest Viewer was started in August,2022 as an educational initiative
        for the programming community. It helps a person to get all the
        Competetive Programming Related Contest details at one Place.
      </p>
      <p>
        There was a vast need of this platform as many programmer who are
        interested in coding but couldnt give programming contest just because
        they dont know about or they forget. This App helps a person to view all
        the upcoming important contest at one place.
      </p>
      <p>
        We currently have only 3 websites link with us i.e{" "}
        <b>Codeforces, Codechef and Atcoder</b> but the goal is to link many
        more such Programming websites in the future.
      </p>
    </Card>
  );
};

export default About;
