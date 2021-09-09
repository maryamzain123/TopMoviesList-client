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
                    <h3> Add New Movie </h3>
                    
                    <input onChange={this.handleChange} type="text" name="title" id="" placeholder="Movie Title" value={this.state.title}/>
                    <br/>
                    
                    <input onChange={this.handleChange} type="text" name="content" id="" placeholder="Movie Description" value={this.state.content}/>
                    <br/>
                    <label htmlFor="rating">Rating</label>
                    <input onChange={this.handleChange} type="number" name="rating" id="" value={this.state.rating}/>
                    <br/><button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMovie})(MovieForm)