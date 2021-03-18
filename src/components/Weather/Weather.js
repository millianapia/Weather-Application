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
import ReverseGeocode, { ILocation, IGeocode } from "bigdatacloud-reverse-geocoding";

//import City from "";
import {
  setCurrentLocation,
  getWeatherData,
  setFetchingTrue,
  clearLocation,
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
  city, 
  getCityData
}) => {


  const [cityObj, setCityObj] = useState({})
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        setLat(latitude);
        let longitude = position.coords.longitude;
        setLong(longitude);
        getApi(bdcApi);

      });
    }

    setFetching();
    // setLocation and getWeatherData go to Redux
    setLocation({ position: { lat, long } });
    getWeatherData(lat, long);
  }, [setFetching, getWeatherData, setLocation , lat, long]);

  const moment = require("moment");
  let now = moment();
  const Http = new XMLHttpRequest();

   const getApi = (bdcApi) => {
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const cityOb = JSON.parse(this.responseText)
          setCityObj(cityOb)
        }
    };
}


console.log(cityObj.city)

  if(weatherData === null) return <div className={classes.loader}>Loading...</div>
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
  const weatherType = weatherData.current.weather[0].main;
  
  return (
    <Grid container direction="column" className={classes.Weather}>
      <h1 className={classes.City}>{cityObj.city}, {cityObj.countryCode}</h1>
      <h5 className={classes.Date}>{now.format("DD-MM-YYYY")}</h5>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className={classes.Information}>
            <Temperature temp={Math.round(temp)} main={weatherType} />
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
  return {
    currentLocation: state.location,
    weatherData: state.weather,
    city: state.setCity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFetching: () => dispatch(setFetchingTrue()),
    setLocation: (location) => dispatch(setCurrentLocation(location)),
    getWeatherData: (latitude, longitude) =>
    dispatch(getWeatherData(latitude, longitude)),
    clearLocation: () => dispatch(clearLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
