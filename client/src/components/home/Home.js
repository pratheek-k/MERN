import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <>
      <Container className="page">
        <h1>This is home page</h1>
      </Container>
      </>
    )
  }
};