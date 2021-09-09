import React, { Component } from 'react';
import { connect } from "react-redux"
import { addMovie } from "../../actions/movies"
import './MovieForm.css'

class MovieForm extends Component {
    state = {
        title: "",
        content: "",
        rating: ""
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.addMovie(this.state)
        this.setState({
            title: "",
            content: "",
            rating: ""

        })
    }

    handleChange = (e) => {
debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="form">
                
                <form className="forminside" onSubmit={this.handleSubmit}>
                    <h3> Add Movie to your List </h3>
                    
                    <input onChange={this.handleChange} type="text" name="title" id="" placeholder="Movie Title" value={this.state.title}/>
                    <br/>
                    <input onChange={this.handleChange} type="number" name="rating" id="" placeholder="Rate your Movie" value={this.state.rating}/>
                    <br/>
                    <textarea onChange={this.handleChange} type="text" name="content" id="" placeholder="Write something about the movie..." value={this.state.content}/>
                    <br/>
                    <input type="submit" value="Submit"/> 
                </form>
            </div>
        )
    }
}

export default connect(null, {addMovie})(MovieForm)