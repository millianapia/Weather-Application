import React, {Component} from "react"
import axios from "axios"


import classes from "./Days.module.css"
import Hourly from "./Hourly/Hourly"
const text = ""

class Days extends Component{
    

    state = {
        hourly: [],
        daily: [],
        error: false,
    }
    componentDidMount() {
        const lat = this.props.langitude
        const long = this.props.longitute
        const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" +long +  "&appid=" + {text};

        axios
          .get(url)
          .then(response => {
             const hourly = response.data.hourly.slice(0,5);
              const daily = response.data.daily.slice(0,4);
              const updateHourly = hourly.map(hour =>{
                  return{
                      ...hour
                  }
              })

              const updateDaily = daily.map(day =>{
                return{
                    ...day
                }
            })
              this.setState({hourly: updateHourly, daily: updateDaily}) 
        })
        .catch(error => {
          console.log(error);
          this.setState({error:true})
        })
      }



    
    render(){
        const moment = require('moment');
        let now = moment();

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
        }

        return(
            <div className={classes.Days}>
                {hourly} p
             </div>
        );
    }
} 

export default Days;