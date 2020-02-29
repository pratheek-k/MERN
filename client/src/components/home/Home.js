import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Header, Sidenav } from '../../components'
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <Sidenav />
      <Container className="page">
        <h1>This is home page</h1>
      </Container>
      </>
    )
  }
};