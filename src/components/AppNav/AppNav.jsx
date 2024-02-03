import { useSelector } from 'react-redux';
import { AuthNav, Navigation, UserMenu } from 'components';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import css from './AppNav.module.css';

export const AppNav = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
