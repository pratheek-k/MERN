import React, { Component } from 'react';
import { UserList, AddUser } from '../../components';
import { UserService } from '../../services';

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
    UserService.getAllUsers()
      .then(result => {
        this.setState({ users: result });
      });
  }

  deleteUser(id) {
    UserService.deleteUser(id)
      .then(result => {
        console.log(result);
        this.getAllUsers();
      });
  }

  render() {
    return (
      <div>
        <AddUser onSuccess={this.getAllUsers} />
        <UserList {...this.state} onDelete={this.deleteUser} />
      </div>
    )
  }
}