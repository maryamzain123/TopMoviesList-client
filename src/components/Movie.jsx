import React from 'react';
import { Link } from 'react-router-dom'

 const Movie = ({movie}) => {
    
    let {id, title, content, rating} = movie
    return (
        <div>
            <Link to={{
                pathname:`/movies/${id}`,
                state:{...movie}
            }
            }><h5>Movie Name: {title}</h5></Link>
            <h6>rating: {rating}</h6>
            <h6>Description: {content}</h6>
           
        </div>
    )
}

export default Movie;