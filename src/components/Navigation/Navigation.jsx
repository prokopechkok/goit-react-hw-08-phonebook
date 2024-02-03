import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <nav className={css.navList}>
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
