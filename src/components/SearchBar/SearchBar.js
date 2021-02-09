import React from "react"
import classes from "./SearchBar.module.css"

const searchBar = (props) =>{
    return <input className={classes.SearchBar} showResult={props.showResult} onSubmit= {props.submit}placeholder="Search for a city...">
        
    </input>
}

export default searchBar