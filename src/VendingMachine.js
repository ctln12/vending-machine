import React, { Component } from 'react';
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <h1>Welcome to the Vending Machine!</h1>
        <p>Please choose a product</p>
        <nav>
          <ul>
            <li>
              <Link to="/soda">Soda</Link>
            </li>
            <li>
              <Link to="/chips">Chips</Link>
            </li>
            <li>
              <Link to="/candies">Candies</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default VendingMachine;
