import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import NewScrape from './components/NewScrape/NewScrape.js'
import Home from './components/Home/Home.js';
class App extends Component {

  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Route exact path='/newScrape' component={NewScrape} />
          <Route exact path='/' component = {Home} />
        </div>

      </Router>
    );
  }
}

export default App;
