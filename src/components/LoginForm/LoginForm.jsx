import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = { email, password };
    // console.log(userData);
    dispatch(apiLoginUser(userData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="userEmail"
          placeholder="alex@abc.com"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="userPassword"
          placeholder="*******"
          // minLength={7}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
