import React from 'react';
import { Switch } from 'react-router-dom';
import routes from './RouteConfig';
import Route from './Route';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      access={route.access}
      isPrivate={route.isPrivate}
      component={props => <route.component {...props} routes={route.route} />} />
  )
}

export default function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </Switch>
  )
}