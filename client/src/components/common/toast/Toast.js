import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import './Toast.css';

export const ToastComponent = props => {
  const [show, toggleShow] = useState(false);

  return (
    <div className="toast-container">
      <Toast show={show} onClose={() => toggleShow(false)} delay={3000} autohide>
        <Toast.Header>{props.title}</Toast.Header>
        <Toast.Body>{props.children}</Toast.Body>
      </Toast>
    </div>
  )
}