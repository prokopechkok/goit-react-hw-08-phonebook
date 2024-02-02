import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
} from '../../redux/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};

export default PrivateRoute;
