import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Thanks for choosing some chips!</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Go back</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Chips;
