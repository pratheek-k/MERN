import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.buttonClick();
  }

  render() {
    let { type, label } = this.props;
    return (
        <button
          type={type}
          id="button"
          className="button"
          onClick={this.handleClick}
        >{label}</button>
    )
  }
}

export default Button;
