import './Login.css';

import React, {useState} from 'react';

import { Link } from 'react-router-dom';

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValue;
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
                value={formValue.email}
                onChange={handleChange}
              />
              <span className="auth__input-error login-input-email-error"></span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="login-input-password" className="auth__input-label">Пароль</label>
              <input
                name="password"
                type="password"
                id="login-input-password"
                className="auth__input"
                required
                value={formValue.password}
                onChange={handleChange}
              />
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
