import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { ModalComponent } from '../../index';
import { UsersService } from '../../../services';
import { ModalOptions } from '../../../models';
import './AddUser.css';

export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      userValue: {
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        isDefaultPassword: false
      }
    }

    this.addUser = this.addUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  addUser() {
    UsersService.addUser(this.state.userValue)
      .then(result => {
        this.props.onSuccess();
      });
  }

  handleClick() {
    this.setState({ modalShow: true });
  }

  handleModalClose(status) {
    this.setState({ modalShow: false });
    if (status) {
      this.addUser();
    }
  }

  handleChange(ev) {
    const newValue = {...this.state.userValue};
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    newValue[ev.target.name] = value;
    this.setState({ userValue: newValue});
  }

  render() {
    const { userValue } = this.state;
    const modalOpts = new ModalOptions();

    return (
      <>
      <div className="adduser-btn-container">
        <Button variant="primary" type="button" onClick={this.handleClick}>Add User</Button>
      </div>

      <ModalComponent
        show={this.state.modalShow}
        title="Add User"
        options={modalOpts}
        onClose={this.handleModalClose}>
        <Form>
          <Form.Group controlId="addUserForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text"
              name="name"
              placeholder="Enter name"
              value={userValue.name}
              onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="addUserForm.Email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              name="email"
              placeholder="Enter email"
              value={userValue.email}
              onChange={this.handleChange} />
            <Form.Text className="text-muted">
              Email address must be unique
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="addUserForm.Password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              name="password"
              placeholder="Enter password"
              value={userValue.password}
              onChange={this.handleChange} />
            <Form.Text className="text-muted">
              This password can be used only once to login
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="addUserForm.IsAdmin">
            <Form.Check
              id="isAdmin"
              type="checkbox"
              name="isAdmin"
              label="Check if the user is admin"
              checked={userValue.isAdmin}
              onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </ModalComponent>
      </>
    )
  }
}