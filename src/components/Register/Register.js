import './Register.css';

import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="register app__register">
      <Link to="/" className="logo register__logo"/>
      <h2 className="auth__title register__title">Добро пожаловать!</h2>
      <form className="auth__form register__form">
        <fieldset className="auth__form-fieldset">
          <ul role="none" className="auth__form-inputs">
            <li className="auth__form-inputs-item">
              <label htmlFor="register-input-name" className="auth__input-label">Имя</label>
              <input id="register-input-name" type="name" className="auth__input" />
              <span className="auth__input-error auth__input-error_active register-input-name-error">Что-то пошло не так...</span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="register-input-email" className="auth__input-label">E-mail</label>
              <input id="register-input-email" type="email" className="auth__input" />
              <span className="auth__input-error register-input-email-error"></span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="register-input-password" className="auth__input-label">Пароль</label>
              <input id="register-input-password" type="password" className="auth__input" />
              <span className="auth__input-error register-input-password-error">Что-то пошло не так...</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit" className="auth__submit-btn register__submit-btn">Зарегистрироваться</button>
        <p className="auth__descr-link" href="#">Уже зарегистрированы? <Link to="/signin" className="auth__link">Войти</Link></p>
      </form>
    </main>
  );
}

export default Register;
