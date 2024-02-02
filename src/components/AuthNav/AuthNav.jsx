import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
