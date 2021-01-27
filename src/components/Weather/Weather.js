import React, {Component} from "react"
import axios from "axios"
import Days from "./Days/Days"
import Today from "./Today/Today"
//import City from "";

import classes from "./Weather.module.css"

const text = ""

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
        long: null

    }

    componentDidMount() {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=London&?units=metric&APPID=" + {text};
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
          console.log("weather " + error);
        })
      }


    render() {
        return(
            <React.Fragment>       
                <p>test {this.state.currentTemp}</p>             
                <Today/>
            </React.Fragment>
        )
    }
}

export default Weather