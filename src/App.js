import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candies from './Candies';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/candies" render={() => <Candies />} />
        </Switch>
      </div>
    );
  }
}

export default App;
