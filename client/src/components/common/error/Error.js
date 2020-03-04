import React from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import history from '../../../services/history.service';
import './Error.css';

export const ErrorPage = (props) => {
  console.log(props);
  const passedState = props.location.state;
  return (
    <Container className="fullpage">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="error-content">
          <div className="error-page-title">{props.title || passedState && passedState.title}</div>
          <div className="divider"></div>
          <div className="error-page-message">{props.children || passedState && passedState.message}</div>
          <div className="divider"></div>
          <div className="error-btn-container">
          {(props.isLogin || passedState && passedState.isLogin) &&
            <Button variant="primary" type="button" onClick={() => history.push('/')}>Go to login</Button>
          }

          {(props.isBack || passedState && passedState.isBack) &&
            <Button variant="primary" type="button" onClick={() => history.goBack()}>Go back</Button>
          }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

ErrorPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  isLogin: PropTypes.bool,
  isBack: PropTypes.bool
}

ErrorPage.defaultProps = {
  title: 'Error',
  children: 'Error message',
  isLogin: true,
  isBack: true
}