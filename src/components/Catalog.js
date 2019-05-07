import React, { Component } from 'react'
import Movie from './Movie';
import Rented from './Rented';

class Catalog extends Component {

    updateInputText = (event) => {this.props.updateInputText(event)}
    
    render() {
                  
    
        return (
            <div>
                <input type="text" placeholder="Search For A Movie" value={this.props.state.inputText} 
                onChange={this.updateInputText} />
                <button>Search</button>
                <span>Budget : {this.props.state.budget} $</span>
                <hr />

                
                {this.props.state.movies.some(m => m.isRented)? 
                 <div><span>Rented</span>
                 <Rented state={this.props.state}
                         handleRent={this.props.handleRent}/></div> : null} 

                 <div id="catalog">Catalog :</div>
                 {this.props.state.movies.map(m => <Movie movie={m} handleRent={this.props.handleRent}/>)}

            </div>
        )

    }
}


export default Catalog