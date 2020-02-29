import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

export class UserList extends Component {

  handleDeleteClick(id) {
    this.props.onDelete(id);
  }

  render() {
    const { users } = this.props;

    return (
      <>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            users && users.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><i className="fa fa-trash" onClick={this.handleDeleteClick.bind(this, user._id)}></i></td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

UserList.defaultProps = {
  users: []
}