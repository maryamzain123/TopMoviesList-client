const moviesReducer = (state={movies:[], requesting:true}, action) => {
switch (action.type) {
    case 'START_FETCHING_MOVIES':
        return {
            ...state, 
            requesting:true
        }

        case 'START_ADDING_MOVIE':
        return {
            ...state, 
            requesting:true
        }
       

        case 'ADDING_MOVIES':
          
        return {
            ...state, 
            requesting:false,
            movies: [...action.movies]
        }
        
        case 'ADDING_MOVIE':
            return {
                ...state, 
                requesting:false,
                movies: [...state.movies, action.movie]

            }
      
        

    default:
   return state    
}
}
export default moviesReducer