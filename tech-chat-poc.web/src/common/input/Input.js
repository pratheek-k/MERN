import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, this.changeCallback);
  }

  changeCallback() {
    this.props.inputChange(this.state.value);
  }

  render() {
    let { value } = this.state;
    let { type, label } = this.props;
    return (
      <label>
        {label}: 
        <input
          type={type}
          id="firstName"
          className="input-first-name"
          value={value}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}

export default Input;
