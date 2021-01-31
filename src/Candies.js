import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Candies extends Component {
  render() {
    return (
      <div className="Candies">
        <h1>Thanks for choosing some candies!</h1>
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

export default Candies;
