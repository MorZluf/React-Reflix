import React, { Component } from 'react'

class MovieDetail extends Component {

    render() {
        let movie = this.props.match.params.id
        let m = this.props.state.movies[movie]
        return (

            <div class="movie-details">
                <span>{m.title} </span>
                <span>{m.year}</span>
                <div><img id="movie-ditails-img" src={m.img} alt="" /></div>
                <p>{m.descrShort}</p>
            </div>
        )
    }
}


export default MovieDetail