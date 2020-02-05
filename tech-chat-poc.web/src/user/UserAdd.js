import React, { Component } from 'react';
import Input from '../common/input/Input';
import Button from '../common/button/Button';

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      error: null
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  addUser() {
    var data = { name: this.state.name };
    fetch('http://localhost:5000/api/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.props.onSuccess();
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  render() {
    const { error } = this.state;
    var errorDiv = <span></span>;

    if (error) {
      errorDiv = <div>Error: {error.message}</div>
    }

    return (
      <div>
        {errorDiv}
        <Input type="text" label="Name" inputChange={this.handleNameChange} />
        <Button type="button" label="Add user" buttonClick={this.addUser} />
      </div>
    )
  }
}

export default UserAdd;