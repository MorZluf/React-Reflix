import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing'

class App extends Component {
  constructor() {
    super()
    // this.state = {
    // }

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="main-links">
            <span id="home-link"><Link to="/">Home</Link></span>
            <span id="catalog-link"><Link to="/catalog">Catalog</Link></span>
            <span id="reflix-logo">REFLIX</span>
          </div>
          <Route path="/" exact component={Landing} />






        </div>

      </Router>
    )




  }
}
export default App;
