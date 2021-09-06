import React from 'react'
import Movie from "../components/Movie"
 const MoviesContainer = ({movies}) => {
    return(
        <div>
            {movies.map(movie => <Movie movie={movie} />)}
        </div>
    )
}

export default MoviesContainer;