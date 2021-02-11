import React from "react";
import Grid from "@material-ui/core/Grid";

import WeatherGenerator from "../../WeatherGenerator/WeatherGenerator";
import classes from "./Temperature.module.css";

const temperature = (props) => {
  return (
    <Grid container >
      <Grid item className={classes.Icon}>
        <WeatherGenerator weather={props.main} size={"90%"} />
      </Grid>
        <Grid item xs container direction="column"  justify="center">
          <Grid item >
            <div className={classes.Temp}>{props.temp}</div>
            </Grid>
            <Grid item >
          <div className={classes.Temp}>{props.main}</div>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default temperature;
