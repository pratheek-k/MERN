import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import history from '../../services/history.service';
import { TokenService, AuthService } from '../../services';
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

    AuthService.login(loginData)
      .then(result => {
        TokenService.setAuthToken(result.token);
        AuthService.setCurrentUser(result.user);
        if (AuthService.isUserAdmin()) {
          history.push('/manage-user');
        } else {
          history.push('/home');
        }
      });
  }

  render() {
    return (
      <Container className="fullpage">
        <Row className="justify-content-center align-items-center">
          <Col md="4" lg="4" className="login-page">
            <div className="login-title">Sign in</div>
            <div className="divider"></div>
            <div className="login-form-container">
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
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};