import React from 'react'
import {NavLink} from "react-router-dom"

const NavBar = () => {
    
        return (
            <div>
                <nav className="nav">
                    <ul>
                   <li> <NavLink to="/home" >Home</NavLink></li>
                   <li><NavLink to="/movies" >Movies List</NavLink></li>
                   <li><NavLink to="/movies/new" >Add new Movie</NavLink></li>
                    </ul>
                </nav>
                
            </div>
        )
    }


export default NavBar