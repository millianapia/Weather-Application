import React from "react"

import WeatherGenerator from "../../WeatherGenerator/WeatherGenerator"
import classes from "./Temperature.module.css"

const temperature = (props) =>{
    return(
        <div className={classes.Wrapper}>
            <div className={classes.Icon}><WeatherGenerator weather={props.main} size={100}/></div>
            <div className={classes.Temp}>{props.temp}</div>
            <div>{props.main}</div>

            </div>
    )
}


export default temperature