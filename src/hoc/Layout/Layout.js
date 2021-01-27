import React, {Component} from "react"

import Toolbar from "../../components/Toolbar/Toolbar"
import Weather from "../../components/Weather/Weather"
import classes from "./Layout.module.css"

class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                <div className={classes.Content}>
                    <Toolbar/>
                </div>
                <Weather/>
            </React.Fragment>
        );
    }
}


export default Layout;