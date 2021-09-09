import React, { Component } from 'react';
import './Home.css'
import {Link} from "react-router-dom"

class Home extends Component {
    render() {
        
        return (
            <div className="home">
                <h1>Welcome to Movies Watchlist </h1>
                <h3>Movies Watchlist is THE BEST way to remember movies and TV shows you want to watch</h3>
                <Link to={{
                pathname:"/movies"}}> <h3>Go To Movies</h3>
            </Link>
            </div>
        );
    }
}

export default Home;