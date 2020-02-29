import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AuthService } from '../../services';
import Utils from '../../utils/Utils';
import './Header.css';

export const Header = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const title = Utils.getTitle(location.pathname);
    setTitle(title);
  }, [location]);

  return (
    <Container className="header" fluid>
      <Row className="header-row">
        <Col md={1} className="v-center">
          <span className="clickable" onClick={() => history.goBack()}>Back</span>
        </Col>
        <Col className="v-center">{title}</Col>
        <Col md={1} className="v-center logout">
          <span className="clickable" onClick={() => AuthService.logout()}>Logout</span>
        </Col>
      </Row>
    </Container>
  )
}