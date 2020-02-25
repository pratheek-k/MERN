import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import './Toast.css';

const ToastService = ({ children, props }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>{props.title}</Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  )
}

export default ToastService;