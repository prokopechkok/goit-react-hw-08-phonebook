import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = { name, email, password };

    dispatch(apiRegisterUser(userData));
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      // autoComplete='off'
    >
      <label>
        Username
        <input
          type="text"
          name="userName"
          placeholder="alex"
          // minLength={2}
          required
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
