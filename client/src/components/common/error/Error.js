import React from 'react';
import Button from 'react-bootstrap/Button';
import './Error.css';

export const ErrorPage = (props) => {
  return (
    <div>
      <h1>Error Page</h1>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
      {props.button &&
        <Button variant="primary" type="button" onClick={props.handleClick}>{props.button}</Button>
      }
    </div>
  )
}