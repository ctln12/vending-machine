import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <h1>Welcome to the Vending Machine!</h1>
        <p>Please choose a product</p>
        <div className="VendingMachine-items">
          <Link to="/soda">Soda</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/candies">Candies</Link>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
