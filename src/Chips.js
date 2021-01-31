import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from './Container';

class Chips extends Component {
  render() {
    return (
      <Container>
        <div className="Chips">
          <h1>Thanks for choosing some chips!</h1>
          <Link to="/">Go back</Link>
        </div>
      </Container>
    );
  }
}

export default Chips;
