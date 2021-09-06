export const fetchMovies = () => {
    return dispatch => {
        dispatch({type: "START_FETCHING_MOVIES"})
        fetch("http://localhost:3001/movies")
        .then(resp => resp.json())
        .then(movies =>{
            dispatch({type: "ADDING_MOVIES", movies})
        })

    }
}

export const addMovie = (movieinfo) => {
    return dispatch => {

        let params =  {
            movie: {
                title: movieinfo.title,
                content: movieinfo.content,
                rating: movieinfo.rating
            } 


        }
        dispatch({type: "START_ADDING_MOVIE"})
        let configObj = {
            method :"POST",
            headers : {
                "Accept" : "application/json", 
                "Content-Type" : "application/json"

            },

            body : JSON.stringify(params)
        }
        fetch("http://localhost:3001/movies", configObj)
        .then(resp => resp.json())
        .then(movie =>{
            dispatch({type: "ADDING_MOVIE", movie})
        })

    }
}