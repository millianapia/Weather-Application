import React from "react"
import classes from "./Hourly.module.css"

const hourly = (props) => (
    <article className={classes.Hourly}>
        <p>{props.hour}</p>
        <p>{props.weather}</p>
        <p>{props.temperature}</p>

    </article>
)

export default hourly;