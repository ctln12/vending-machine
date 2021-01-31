import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Chips.css';

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Thanks for choosing some chips!</h1>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Chips;
