import React, {Component} from "react"

import Toolbar from "../../components/Toolbar/Toolbar"
import Weather from "../../components/Weather/Weather"
import classes from "./Layout.module.css"

class Layout extends Component{
    
    render(){

        return(
            
            <div className={classes.App} >
                <Weather/>
            </div>
        );
    }
}


export default Layout;