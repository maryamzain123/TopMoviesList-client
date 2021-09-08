import React, { Component } from 'react'
import { connect } from "react-redux"
import Movie from '../components/Movie';
import { fetchMovies, addMovie } from "../actions/movies"


export class Movies extends Component {

    componentDidMount(){
        this.props.fetchMovies()

    }

    
    render() {
       
        return (
            <div>
                <h1>Movies</h1>
                {this.props.requesting ? <h1> loading.. </h1> : this.props.movies.map(movie => <Movie movie={movie} />) }
               
            </div>
        )
    }
}

const mapStateToProps = ({moviesReducer}) => {
    return {
        movies: moviesReducer.movies,
        requesting: moviesReducer.requesting
    }
    
}



export default connect(mapStateToProps, {fetchMovies, addMovie})(Movies)