import { TextField } from "@material-ui/core"
import React from "react"

const searchBar = (props) => (
    <div>
        <TextField
        label="Search for a city"
        variant="outlined"></TextField>
    </div>
)

export default searchBar