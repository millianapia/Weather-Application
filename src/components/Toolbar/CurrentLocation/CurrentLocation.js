import React, {Component} from "react"
import PlaceIcon from '@material-ui/icons/Place';


class CurrentLocation extends Component{
    state = {
        long : null,
        lat: null
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition( position => {
            this.setState({long: position.coords.longitude, lat:position.coords.latitude})
        })

      }




    render(){

        
        
        return(
                    <div>
                        <p><PlaceIcon/>{this.state.lat} and {this.state.long}</p>
                    </div>
        )
    }
}

export default CurrentLocation;