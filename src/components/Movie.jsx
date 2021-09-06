import React from 'react'

 const Movie = ({movie}) => {
    let {title, content} = movie
    return (
        <div>
            <h2>{title}</h2>
            <h2>{content}</h2>
        </div>
    )
}

export default Movie;