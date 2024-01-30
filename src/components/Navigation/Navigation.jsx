import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.headerNav}>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
