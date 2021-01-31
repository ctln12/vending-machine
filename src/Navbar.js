import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
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

export default Navbar;
