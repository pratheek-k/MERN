import React from 'react';
import { Route as ARoute, Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import history from './services/history.service';
import Routes from './routes';
import routes from './routes/RouteConfig';
import { Header, Sidenav, ToastComponent } from './components';
import './App.css';

const App = () => {
  const navComps = routes.filter(route => !route.noNav && route);
  return (
    <div className="App">
      <Router history={history}>
        <ToastComponent title="Error">Error message</ToastComponent>

        <Switch>
          {navComps.map((route, i) => <ARoute key={i} path={route.path} children={<Header />} />)}
        </Switch>

        <Switch>
          {navComps.map((route, i) => <ARoute key={i} path={route.path} children={<Sidenav />} />)}
        </Switch>

        <Routes />
      </Router>
    </div>
  );
}

export default App;
