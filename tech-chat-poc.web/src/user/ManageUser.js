import React, { Component } from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';

class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: []
    }

    this.getAllUsers = this.getAllUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ users: result });
        },
        (error) => {
          this.setState({ error })
        }
      )
  }

  deleteUser(id) {
    const url = 'http://localhost:5000/api/deleteuser/' + id;
    fetch(url, { method: 'DELETE' })
      .then(
        (result) => {
          this.getAllUsers();
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, users } = this.state;
    var errorDiv = <span></span>;

    if (error) {
      errorDiv = <div>Error: {error.message}</div>
    }

    return (
      <div>
        {errorDiv}
        <UserAdd onSuccess={this.getAllUsers} />
        <UserList users={this.state.users} onDelete={this.deleteUser} />
      </div>
    )
  }
}

export default ManageUser;