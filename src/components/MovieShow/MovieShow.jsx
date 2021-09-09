import React, { Component} from 'react';
import Movie  from '../Movie';
import './MovieShow.css'



class MovieShow extends Component {
   
    render() {
        return (
            <div className= "movieshow">
                <Movie movie={this.props.location.state}></Movie>
            </div>
        );
    }
}

export default MovieShow;