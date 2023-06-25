import './Login.css';

import { Link } from 'react-router-dom';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login({ handleLogin }) {
  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = values;
    handleLogin(email, password);
  }

  return (
    <main className="login app__login">
      <Link to="/" className="logo login__logo"/>
      <h2 className="auth__title login__title">Рады видеть!</h2>
      <form onSubmit={handleSubmit} className="auth__form login__form">
        <fieldset className="auth__form-fieldset">
          <ul role="none" className="auth__form-inputs">
            <li className="auth__form-inputs-item">
              <label htmlFor="login-input-email" className="auth__input-label">E-mail</label>
              <input
                name="email"
                type="email"
                id="login-input-email"
                className="auth__input"
                required
                value={values.email || ''}
                onChange={handleChange}
              />
              <span className={`auth__input-error ${errors.email && 'auth__input-error_active'} login-input-email-error`}>{errors.email || ''}</span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="login-input-password" className="auth__input-label">Пароль</label>
              <input
                name="password"
                type="password"
                id="login-input-password"
                className="auth__input"
                required
                value={values.password || ''}
                onChange={handleChange}
              />
              <span className={`auth__input-error ${errors.password && 'auth__input-error_active'} login-input-password-error`}>{errors.password || ''}</span>
            </li>
          </ul>
        </fieldset>

        <button
          disabled={!isValid}
          type="submit"
          className={`auth__submit-btn register__submit-btn ${!isValid &&  'auth__submit-btn_inactive'}`}>
            Войти
        </button>
        <p className="auth__descr-link" href="#">Ещё не зарегистрированы? <Link to="/signup" className="auth__link">Регистрация</Link></p>
      </form>
    </main>
  );
}

export default Login;
