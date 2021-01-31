import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <h1>Welcome to the Vending Machine!</h1>
        <p>Please choose a product</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/soda">Soda</NavLink>
            </li>
            <li>
              <NavLink to="/chips">Chips</NavLink>
            </li>
            <li>
              <NavLink to="/candies">Candies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default VendingMachine;
