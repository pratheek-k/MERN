import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalOptions } from '../../../models';
import './Modal.css';

export const ModalComponent = (props) => {
  const [show, setShow] = useState(false);
  const opts = props.options || new ModalOptions();

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Modal show={show} onHide={props.onClose.bind(this, false)} centered>
      <Modal.Header closeButton={opts.closeIcon}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.children}</Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose.bind(this, false)}>{opts.closeBtn}</Button>
        <Button variant="primary" onClick={props.onClose.bind(this, true)}>{opts.saveBtn}</Button>
      </Modal.Footer>
    </Modal>
  )
}