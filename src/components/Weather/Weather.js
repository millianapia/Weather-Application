import React, {Component} from "react"
import axios from "axios"
import Today from "./Today/Today"
import { Box, Divider, Grid, GridList, GridListTile, makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


//import City from "";

import classes from "./Weather.module.css"
import InformationCard from "./InformationCard/InformationCard";
import Temperature from "../Weather/Temperature/Temperature"
import Hourly from "./Hourly/Hourly"


const text = ""
const city = "Bergen"

class Weather extends Component {


    state = {
        currentTemp: null,
        minTemp: null,
        maxTemp: null,
        pressure: null,
        humidity: null,
        wind: null,
        icon: null,
        overcast: null,
        sunrise: null,
        sunset: null,
        lat: null,
        long: null,
        main: null,

    }

    componentDidMount() {
         let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + text;
        axios
          .get(url)
          .then(response => {
              this.setState({
                  currentTemp: response.data.main.temp,
                  minTemp: response.data.main.temp_min,
                  maxTemp :response.data.main.temp_max,
                  pressure: response.data.main.pressure,
                  humidity: response.data.main.humidity + '%',
                  wind :response.data.wind.speed + 'm/s',
                  main: response.data.weather[0].main,
                  overcast : response.data.weather[0].description,
                  icon : "images/" + response.data.weather[0].icon.slice(0, 2) + ".svg",
                  sunrise : new Date(response.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4),
                  sunset : new Date(response.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4),
                  lat: response.data.coord.lat,
                  long: response.data.coord.lon,
              })
              console.log(response)
              
            })
        .catch(error => {
          console.log( error);
        })
      } 


    render() {
        const moment = require('moment');
        let now = moment();
/* 
        let hourly = <p style={{textAlign: "center"}}>Something went wrong</p>
        let key = 0;
        if(!this.state.error){
            hourly = this.state.hourly.map (hour =>{
                key = key+1;
                return(
                    <Hourly
                        key={key}
                        hour = {now.get("hour") + key }
                        temperature={hour.temp}
                        weather={hour.weather[0].main}
                        />
                )
            })
        } */



        return(
            <Grid container direction="column" className={classes.Weather}>
                <h1 className={classes.City}>{city}</h1>
                <h5 className={classes.Date}>{now.format("DD-MM-YYYY")}</h5>
                   <Grid container spacing={2}>
                   <Grid item xs={12} lg={6} >
                       <div className={classes.Information}>
                        <Temperature temp={this.state.currentTemp} main={this.state.main}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div  className={classes.Information}> 
                        <InformationCard
                        minTemp={this.state.minTemp}
                        maxTemp={this.state.maxTemp}
                        pressure={this.state.pressure}
                        humidity={this.state.humidity}
                        wind={this.state.wind}
                        overcast={this.state.overcast}
                        main={this.state.main}
                        />
                        </div>
                       
                    </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                 <Grid item xs={12} lg={6}>
                         <div className={classes.Time}>
                             
                         </div>
                   </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default Weather