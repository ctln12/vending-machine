import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Candies extends Component {
  render() {
    return (
      <div className="Candies">
        <h1>Thanks for choosing some candies!</h1>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Candies;
