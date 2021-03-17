import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Today from "./Today/Today";
import {
  Box,
  Divider,
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

//import City from "";
import {
  setCurrentLocation,
  getWeatherData,
  setFetchingTrue,
  clearLocation,
  setCity,
} from "../../redux/actions";

import classes from "./Weather.module.css";
import InformationCard from "./InformationCard/InformationCard";
import Temperature from "../Weather/Temperature/Temperature";
import Hourly from "./Hourly/Hourly";
import { connect } from "react-redux";

const text = "";
const city = "Bergen";

const Weather = ({
  setLocation,
  getWeatherData,
  setFetching,
  weatherData,
  setCityLongLat,
}) => {
  
  
 const {
    temp,
    temp_min,
    temp_max,
    feels_like,
    pressure,
    humidity,
    wind_speed,
    clouds,
  } = weatherData.current;
  const { weatherType, weatherTypeDescription } = weatherData.current.weather; 

  useEffect(() => {
    setFetching();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // setLocation and getWeatherData go to Redux
        setLocation({ position: { latitude, longitude } });
        getWeatherData(latitude, longitude);
        setCityLongLat(latitude, longitude);
      });
    }
  }, [setFetching, getWeatherData, setLocation, setCityLongLat]);

  const moment = require("moment");
  let now = moment();

  console.log(setCityLongLat)

  return (
    <Grid container direction="column" className={classes.Weather}>
      <h1 className={classes.City}>{city}</h1>
      <h5 className={classes.Date}>{now.format("DD-MM-YYYY")}</h5>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className={classes.Information}>
            <Temperature temp={temp} main={weatherType} /> 
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.Information}>
            <InformationCard
              minTemp={temp_min}
              maxTemp={temp_max}
              pressure={pressure}
              humidity={humidity}
              wind={wind_speed}
              overcast={clouds}
              main={weatherType}
            /> 
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className={classes.Time}></div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  console.log(state.weather);
  return {
    currentLocation: state.location,
    weatherData: state.weather,
    city: state.city,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFetching: () => dispatch(setFetchingTrue()),
    setLocation: (location) => dispatch(setCurrentLocation(location)),
    getWeatherData: (latitude, longitude) =>
      dispatch(getWeatherData(latitude, longitude)),
    clearLocation: () => dispatch(clearLocation()),
    setCityLongLat: (lat, long) => dispatch(setCity(lat, long)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
