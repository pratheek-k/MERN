import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthService, TokenService } from '../services';
import { roles } from '../config/config';

export default function RouteWrapper({
  component: Component,
  access,
  isPrivate,
  ...rest
}) {
  const signed = TokenService.getAuthToken() || false;
  let isAccess = false;
  const currentUser = AuthService.getCurrentUser();

  const userRoles = (currentUser && currentUser.roles) ? currentUser.roles : [];

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }
  
  isAccess = (access === roles.any) || access.some(role => userRoles.some(userRole => userRole.toLowerCase() === role.toLowerCase()));

  if (isAccess) {
    return <Route {...rest} component={Component} />;
  }

  return <Redirect to="/error" />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  access: PropTypes.arrayOf(PropTypes.string),
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: true,
  access: []
}