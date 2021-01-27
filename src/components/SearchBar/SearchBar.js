import React from "react"
import classes from "./SearchBar.module.css"

const searchBar = () =>{
    return <input className={classes.SearchBar} placeholder="Search for a city..."></input>
}

export default searchBar