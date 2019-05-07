import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            
            users : [ 
            { name: "rick", color: "rgb(50, 184, 170)" },
            { name: "morty", color: "rgb(214, 214, 63)" },
            { name: "summer", color: "rgb(161, 106, 161)" },
            { name: "jerry", color: "rgb(3, 105, 3)" }
        ]
        }
    }
    

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