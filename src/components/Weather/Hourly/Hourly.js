import React from "react"
import classes from "./Hourly.module.css"
import WeatherGenerator from "../../WeatherGenerator/WeatherGenerator";

const hourly = (props) => (
    <div className={classes.hourly}>
        <WeatherGenerator weather={props.weather} size={"50%"} />
        <p>{props.day}</p>
        <p>{props.weather}</p>
        <p>{Math.round(props.temperature)}<span>&#8451;</span></p>

    </div>
)

export default hourly;