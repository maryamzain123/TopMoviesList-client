import React from 'react';
import { Link } from 'react-router-dom'
import "./Movie.css"

 const Movie = ({movie}) => {
    
    let {id, title, content, rating} = movie
    return (
        <div className="movie">
            <Link to={{
                pathname:`/movies/${id}`,
                state:{...movie}}}> <h3>Movie Name: {title}</h3>
            </Link>
            <h3>Rating: {rating}</h3>
            <h5>Description: {content}</h5>
           
        </div>
    )
}

export default Movie;