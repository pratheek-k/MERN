import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { UserService, TokenService } from '../../services';
import { constants } from '../../config/config';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(ev) {
    const name = ev.target.name;
    this.setState({ [name]: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const form = ev.currentTarget;
    if (form.checkValidity() === true) {
      this.setState({ validated: true });
      this.loginUser();
    }
  }

  loginUser() {
    const loginData = {
      email: this.state.email,
      password: this.state.password
    };

    UserService.login(loginData)
      .then(result => {
        console.log(result);
        TokenService.setAuthToken(result.token);
        UserService.setUser(result.user);
        document.location = '/home'
      });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md="4" lg="4">
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group controlId="loginForm.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="loginForm.Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
};