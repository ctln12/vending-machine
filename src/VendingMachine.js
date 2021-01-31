import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './VendingMachine.css';
import Container from './Container';

class VendingMachine extends Component {
  render() {
    return (
      <Container>
        <div className="VendingMachine">
          <h1>Welcome to the Vending Machine!</h1>
          <p>Please choose a product</p>
          <div className="VendingMachine-items">
            <Link to="/soda" className="VendingMachine-item">Soda</Link>
            <Link to="/chips" className="VendingMachine-item">Chips</Link>
            <Link to="/candies" className="VendingMachine-item">Candies</Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default VendingMachine;
