import React, { Component} from 'react';
import Movie  from '../Movie/Movie';
import './MovieShow.css'
import {Link} from "react-router-dom"




class MovieShow extends Component {
   
    render() {
        return (
            <div className= "movieshow">
                <Movie movie={this.props.location.state}></Movie>
                <Link to={{
                pathname:"/movies"}}> <h3>Go back to list</h3></Link>
            </div>
        );
    }
}

export default MovieShow;