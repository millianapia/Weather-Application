import React, {Component} from "react"

import { WiThunderstorm } from "weather-icons-react";
import { WiRainMix } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiSnow } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiFog } from "weather-icons-react";



class WeatherGenerator extends Component {
    render(){
        let weather = this.props.weather
        let icon = null;


        if (weather === 'Thunderstorm') {
            icon = <WiThunderstorm size={this.props.size} color={this.props.color}/>;
          } else if (weather === 'Drizzle') {
            icon = <WiRainMix size={this.props.size} color={this.props.color}/>
          } else if (weather === 'Rain') {
            icon = <WiRain size={this.props.size} color={this.props.color}/>;
          } else if (weather === 'Snow') {
            icon = <WiSnow size={this.props.size} color={this.props.color}/>;
          } else if (weather === 'Clear') {
            icon = <WiDaySunny size={this.props.size} color={this.props.color}/>;
          } else if (weather === 'Clouds') {
            icon = <WiCloudy size={this.props.size} color={this.props.color}/>;
          } else {
            icon = <WiFog size={this.props.size} color={this.props.color}/>;
          }


        return(icon)
    }
}


export default WeatherGenerator