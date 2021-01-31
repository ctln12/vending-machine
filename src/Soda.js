import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <h1>Thanks for choosing a soda!</h1>
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

export default Soda;
