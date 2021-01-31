import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from './Container';

class Soda extends Component {
  render() {
    return (
      <Container>
        <div className="Soda">
          <h1>Thanks for choosing a soda!</h1>
          <Link to="/">Go back</Link>
        </div>
      </Container>
    );
  }
}

export default Soda;
