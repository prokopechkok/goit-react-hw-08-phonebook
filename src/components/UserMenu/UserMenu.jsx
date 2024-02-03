import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from '../../redux/auth/authSelectors';
import { apiLogoutUser } from '../../redux/auth/authOperations';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const email = user?.email ?? 'Email not found';

  return (
    <div className={css.wrapper}>
      <p className={css.headerLink}>{email}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
        disabled={isLoading}
      >
        Logout
      </button>
    </div>
  );
};
