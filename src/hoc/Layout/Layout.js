import React, {Component} from "react"

import Toolbar from "../../components/Toolbar/Toolbar"
import Weather from "../../components/Weather/Weather"
import classes from "./Layout.module.css"
import SearchBar from "../../components/SearchBar/SearchBar"

class Layout extends Component{
    render(){
        return(
            <div className={classes.App}>
                <div className={classes.Content}>
                    <Toolbar/>
                </div>
                <SearchBar/>
                <Weather/>
            </div>
        );
    }
}


export default Layout;