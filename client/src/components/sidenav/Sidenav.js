import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes/RouteConfig';

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
              !route.noNav && (
                <li className={"nav-item " + (selected === route.path ? 'selected' : '')} key={i}>
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