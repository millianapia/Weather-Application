import React, {Component} from "react"
import axios from "axios"
import { TextField } from "@material-ui/core"



class Weather extends Component {
    state = {
        location: null,
        weather: [],
       // date: <getCurrentDate/>
    }

    componentDidMount () {
        console.log( this.props );
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice( 0, 4 );
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }
    render() {
        return(
            <React.Fragment>
              <div>by</div>
                 <TextField></TextField>
            </React.Fragment>
        )
    }
}

export default Weather