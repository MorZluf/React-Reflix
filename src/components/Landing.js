import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Landing extends Component {

    render() {

        return (
            <div>
                <h3>Who's Watching ?</h3>
                <div id="users-container">
                    <div className="user" id="user1"><Link to="/catalog">Rick</Link></div>
                    <div className="user" id="user2"><Link to="/catalog">Morty</Link></div>
                    <div className="user" id="user3"><Link to="/catalog">Summer</Link></div>
                    <div className="user" id="user4"><Link to="/catalog">Jerry</Link></div>
                </div>
            </div>
        )



    }
}


export default Landing