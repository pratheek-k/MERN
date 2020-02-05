import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  handleDeleteClick(id) {
    this.props.onDelete(id);
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        Users:
        <ul>
          {
            users.map((user, i) => (
              <li key={i}>{user.name} <i className="fa fa-trash" onClick={this.handleDeleteClick.bind(this, user._id)}></i></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default UserList;