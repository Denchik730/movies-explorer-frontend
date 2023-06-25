import './Register.css';

import { Link } from 'react-router-dom';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({
  handleRegister,
  isFetching,
}) {
  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const {name, email, password} = values;
    handleRegister(name, email, password)
  }
  return (
    <main className="register app__register">
      <Link to="/" className="logo register__logo"/>
      <h2 className="auth__title register__title">Добро пожаловать!</h2>
      <form onSubmit={handleSubmit} className="auth__form register__form">
        <fieldset className="auth__form-fieldset">
          <ul role="none" className="auth__form-inputs">
            <li className="auth__form-inputs-item">
              <label htmlFor="register-input-name" className="auth__input-label">Имя</label>
              <input
                id="register-input-name"
                type="name"
                name="name"
                className="auth__input"
                required
                minLength={2}
                maxLength={30}
                value={values.name || ''}
                onChange={handleChange}
                />
              <span className={`auth__input-error ${errors.name && 'auth__input-error_active'} register-input-name-error`}>{errors.name || ''}</span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="register-input-email" className="auth__input-label">E-mail</label>
              <input
                id="register-input-email"
                type="email"
                name="email"
                className="auth__input"
                required
                value={values.email || ''}
                onChange={handleChange}
              />
              <span className={`auth__input-error ${errors.email && 'auth__input-error_active'} register-input-email-error`}>{errors.email || ''}</span>
            </li>

            <li className="auth__form-inputs-item">
              <label htmlFor="register-input-password" className="auth__input-label">Пароль</label>
              <input
                id="register-input-password"
                type="password"
                name="password"
                className="auth__input"
                required
                value={values.password || ''}
                onChange={handleChange}
                />
              <span className={`auth__input-error ${errors.password && 'auth__input-error_active'} register-input-password-error`}>{errors.password || ''}</span>
            </li>
          </ul>
        </fieldset>

        <button
          disabled={!isValid || isFetching}
          type="submit"
          className={`auth__submit-btn register__submit-btn ${!isValid && 'auth__submit-btn_inactive'}`}>
            Зарегистрироваться
        </button>
        <p className="auth__descr-link" href="#">Уже зарегистрированы? <Link to="/signin" className="auth__link">Войти</Link></p>
      </form>
    </main>
  );
}

export default Register;
