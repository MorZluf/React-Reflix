import React, { Component } from 'react'
import Movie from './Movie';
import Rented from './Rented';

class Catalog extends Component {

    updateInputText = (event) => {this.props.updateInputText(event)}    
    
    render() {
                      
        return (
            <div>
                <input type="text" placeholder=" Search For A Movie" value={this.props.inputText} 
                onChange={this.updateInputText} />
                <span>Budget : {this.props.budget} $</span>
                <hr />

                
                {this.props.movies.some(m => m.isRented)? 
                 <div><span>Rented :</span>
                 <Rented movies={this.props.movies}
                         handleRent={this.props.handleRent}/></div> : null} 

                 <div id="catalog">Catalog :</div>
                 {this.props.movies.map(m => <Movie movie={m} handleRent={this.props.handleRent}/>)}

            </div>
        )

    }
}


export default Catalog