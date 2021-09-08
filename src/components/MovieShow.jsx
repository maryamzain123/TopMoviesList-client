import React, { Component} from 'react';
import Movie  from '../components/Movie';



class MovieShow extends Component {
   
    render() {
        return (
            <div>
                <Movie movie={this.props.location.state}></Movie>
            </div>
        );
    }
}

export default MovieShow;