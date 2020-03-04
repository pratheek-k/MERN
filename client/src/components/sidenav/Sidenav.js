import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes/RouteConfig';
import { AuthService } from '../../services';
import { roles } from '../../config/config';
import './Sidenav.css';

export const Sidenav = () => {
  const [selected, setSelected] = useState('');
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname)
  }, [location]);

  return (
    <div className="sidenav">
      <ul className="nav-list">
      {
        routes && routes.map((route, i) => (
          <>
          {
            (!route.noNav) &&
              ((route.access !== roles.admin) || (route.access === roles.admin && AuthService.isUserAdmin())) && (
              <li key={i} className={"nav-item " + (selected === route.path ? 'selected' : '')}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            )
          }
          </>
        ))
      }
      </ul>
    </div>
  )
}