import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Movie extends Component {

    handleRent = () => {this.props.handleRent(this.props.movie.id)}

    render() {
        
        
        
        return (
            <div className="movie">
             <Link to={`/catalog/${this.props.movie.id}`}><img src={this.props.movie.img} alt="" /></Link>
                <span className="renting-button" onClick={this.handleRent}>{this.props.movie.isRented ? "-" : "+"} </span>
            </div>

        )
    }
}


export default Movie