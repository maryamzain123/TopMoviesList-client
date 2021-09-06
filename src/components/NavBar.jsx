import React from 'react'
import {NavLink} from "react-router-dom"

const NavBar = () => {
    
        return (
            <div>
                <nav>
                    <ul>
                    <NavLink to="/home" >Home</NavLink><br/>
                    <NavLink to="/movies" >Movies</NavLink><br/>
                    <NavLink to="/movies/new" >Add new Movie</NavLink><br/>
                    </ul>
                </nav>
                
            </div>
        )
    }


export default NavBar