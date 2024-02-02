import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
