import React, { Component } from 'react';
import { connect } from "react-redux"
import { addMovie } from "../actions/movies"

class MovieForm extends Component {
    state = {
        title: "",
        content: "",
        rating: ""
    }

    handleSubmit =(e) => {
        e.preventDEfault();
        this.props.addMovie(this.state)
        this.setState({
            title: "",
            content: "",
            rating: ""

        })
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} type="text" name="title" id="" value={this.state.title}/>
                    <br/>
                    <label htmlFor="content">Content</label>
                    <input onChange={this.handleChange} type="text" name="content" id="" value={this.state.content}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMovie})(MovieForm)