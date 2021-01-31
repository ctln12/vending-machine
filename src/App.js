import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candies from './Candies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={VendingMachine} />
            <Route exact path="/soda" component={Soda} />
            <Route exact path="/chips" component={Chips} />
            <Route exact path="/candies" component={Candies} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
