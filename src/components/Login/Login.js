import './Login.css';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className="login app__login">
      <Link to="/" className="logo login__logo"/>
      <h2 className="auth__title login__title">Рады видеть!</h2>
      <form className="auth__form login__form">
        <fieldset className="auth__form-fieldset">
          <ul role="none" className="auth__form-inputs">
            <li className="auth__form-inputs-item">
              <label htmlFor="login-input-email" className="auth__input-label">E-mail</label>
              <input id="login-input-email" type="email" className="auth__input" />
              <span className="auth__input-error login-input-email-error"></span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="login-input-password" className="auth__input-label">Пароль</label>
              <input id="login-input-password" type="password" className="auth__input" />
              <span className="auth__input-error auth__input-error_active login-input-password-error">Что-то пошло не так...</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit" className="auth__submit-btn login__submit-btn">Войти</button>
        <p className="auth__descr-link" href="#">Ещё не зарегистрированы? <Link to="/signup" className="auth__link">Регистрация</Link></p>
      </form>
    </main>
  );
}

export default Login;
