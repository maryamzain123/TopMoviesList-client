import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchMovies, addMovie } from "../../actions/movies"
import { Link } from 'react-router-dom';
import './Movies.css'

export class Movies extends Component {

    componentDidMount() {
        this.props.fetchMovies()

    }


    render() {
        
        return (
            <div class="Movieslist" >
                <h1>Movies WatchList</h1>

                {/* Loading... */}
                {this.props.requesting && <h1> loading.. </h1>}

                {/* Movies list */}
                {!this.props.requesting && (
                    <ul >
                        
                        {this.props.movies.map(movie => (
                            <li>
                                <Link to={{
                                    pathname:`/movies/${movie.id}`,
                                    state: {...movie}
                                }}>{movie.title}</Link>
                            </li>))}
                    </ul>
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ moviesReducer }) => {
    return {
        movies: moviesReducer.movies,
        requesting: moviesReducer.requesting
    }

}



export default connect(mapStateToProps, { fetchMovies, addMovie })(Movies)