import React, {Component} from "react"
import  {Image, StyleSheet} from 'react-native'

import Rain from "../../assets/gabriele-diwald-Kwi60PbAM9I-unsplash.jpg"
import Thunder from "../../assets/johannes-plenio-E-Zuyev2XWo-unsplash.jpg"
import Sunny from "../../assets/wolfgang-hasselmann-bR_-gllg7Bs-unsplash.jpg"
import Cloudy from "../../assets/zbynek-burival-8iZG31eXkks-unsplash.jpg"


class WeatherBackgroundGenerator extends Component {

    

    render(){
        let weather = this.props.weather
        let image = null

        let styles = StyleSheet.create({
            backgroundImage: {
              flex: 1,
              resizeMode: 'cover', // or 'stretch'
            }
          });

        if (weather === 'Thunderstorm') {
                    image = <Image source={require({Thunder})} style={styles.backgroundImage}/>
          }  else if (weather === 'Rain') {
                    image = <Image source={require({Rain})} style={styles.backgroundImage}/>
        } else if (weather === 'Clear') {
                    image = <Image source={require({Sunny})} style={styles.backgroundImage}/>
          } else if (weather === 'Clouds') {
                    image = <Image source={require({Cloudy})} style={styles.backgroundImage}/>
        } 

        return(image)
    }
}


export default WeatherBackgroundGenerator