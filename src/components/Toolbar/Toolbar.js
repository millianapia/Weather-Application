import React from "react"
import Logo from "../Logo/Logo"
import SearchBar from "./SearchBar/SearchBar"

import classes from "./Toolbar.module.css"

const toolbar = (props) => (
    <header className={classes.Toolbar}>
            <Logo/>
            <SearchBar/>
    </header>
)

export default toolbar;