import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = { email, password };
    dispatch(apiLoginUser(userData));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputGroup}>
        <label className={css.label} htmlFor="userEmail">
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="alex@abc.com"
          autoComplete="true"
          required
        />
      </div>

      <div className={css.inputGroup}>
        <label className={css.label} htmlFor="userPassword">
          Password
        </label>
        <input
          className={css.input}
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="*******"
          autoComplete="true"
          // minLength={7}
          required
        />
      </div>
      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};
