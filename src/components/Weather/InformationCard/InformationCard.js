import React from "react"
import {Grid, Typography } from '@material-ui/core';
import { WiThermometer } from "weather-icons-react";
import { WiHumidity } from "weather-icons-react";
import { WiBarometer } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";


import WeatherGenerator from "../../WeatherGenerator/WeatherGenerator"



const informationCard = (props) => {
    return(
 
        <Grid container spacing={3}>

        <Grid item xs>
        <WiThermometer size={30} color='white' />
        <Typography>Min Temperature</Typography>
              <Typography>{props.minTemp} </Typography>
        </Grid>
        <Grid item xs>
        <WiThermometer size={30} color='white' />
        <Typography>Maximum Temperature</Typography>
        <Typography>{props.maxTemp}</Typography>
        </Grid>
        <Grid item xs>
        <WiBarometer size={30} color='white' />
        <Typography>Air Pressure</Typography>
        <Typography>{props.pressure}</Typography>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
        <WiHumidity size={30} color='white' />
        <Typography>Humidity</Typography>
        <Typography>{props.humidity}</Typography>
        </Grid>
        <Grid item xs>
        <WiStrongWind size={30} color='white' />
        <Typography>Wind Speed</Typography>
        <Typography>{props.wind}</Typography>
        </Grid>
        <Grid item xs>
        <WeatherGenerator weather={props.main} size={30} color='white'/>
        <Typography>General Overcast</Typography>
        <Typography>{props.overcast}</Typography>
        </Grid>
        </Grid>
        </Grid>

    )
}


export default informationCard