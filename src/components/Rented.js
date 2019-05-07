import React, { Component } from 'react'
import Movie from './Movie';

class Rented extends Component {


    render() {
        return (
            <div id="rented-container">
                {this.props.state.movies.filter(m => m.isRented)
                                        .map(m => <Movie movie={m} handleRent={this.props.handleRent} />)}

            </div>
        )

    }

}

export default Rented