import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <div className={css.inputGroup}>
        <label className={css.label} htmlFor="userName">
          Username
        </label>
        <input
          className={css.input}
          type="text"
          name="userName"
          id="userName"
          placeholder="alex"
          // minLength={2}
          autoComplete="true"
          required
        />
      </div>

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
        Register
      </button>
    </form>
  );
};
