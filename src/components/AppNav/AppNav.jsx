import { useSelector } from 'react-redux';
import { AuthNav, Navigation, UserMenu } from 'components';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';

export const AppNav = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
