import React from "react"
import {Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const informationCard = (props) => {
    return(
 
        <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
        <Typography>Minimum Temperature</Typography>
              <Typography>{props.minTemp}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography>Maximum Temperature</Typography>

        <Typography>{props.maxTemp}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography>Air Pressure</Typography>

        <Typography>{props.pressure}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Typography>Humidity</Typography>

          <Typography>{props.humidity}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography>Wind Speed</Typography>

        <Typography>{props.wind}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography>General Overcast</Typography>

        <Typography>{props.overcast}</Typography>
        </Grid>
        </Grid>

    )
}


export default informationCard