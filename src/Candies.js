import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from './Container';

class Candies extends Component {
  render() {
    return (
      <Container>
        <div className="Candies">
          <h1>Thanks for choosing some candies!</h1>
          <Link to="/">Go back</Link>
        </div>
      </Container>
    );
  }
}

export default Candies;
