import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <h1>Thanks for choosing a soda!</h1>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Soda;
