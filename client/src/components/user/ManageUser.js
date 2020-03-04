import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { UserList, AddUser } from '../../components';
import { UsersService } from '../../services';

export class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

    this.getAllUsers = this.getAllUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    UsersService.getAllUsers()
      .then(result => {
        this.setState({ users: result });
      });
  }

  deleteUser(id) {
    UsersService.deleteUser(id)
      .then(result => {
        this.getAllUsers();
      });
  }

  render() {
    return (
      <>
      <Container className="page">
        <AddUser onSuccess={this.getAllUsers} />
        <UserList {...this.state} onDelete={this.deleteUser} />
      </Container>
      </>
    )
  }
}