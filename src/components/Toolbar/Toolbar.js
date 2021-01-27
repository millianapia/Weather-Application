import React from "react"
import Logo from "../Logo/Logo"

import CurrentLocation from "./CurrentLocation/CurrentLocation"
import classes from "./Toolbar.module.css"

const toolbar = (props) => (
    <header className={classes.Toolbar}>
            <Logo/>
            <CurrentLocation/>

    </header>
)

export default toolbar;