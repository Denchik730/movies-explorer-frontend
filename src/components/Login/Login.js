import './Login.css';

function Login() {
  return (
    <main className="login app__login">
      <div className="logo login__logo"></div>
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
              <span className="auth__input-error login-input-password-error">Что-то пошло не так...</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit" className="auth__submit-btn login__submit-btn">Зарегистрироваться</button>
        <p className="auth__descr-link" href="#">Ещё не зарегистрированы? <a href="#" className="auth__link-login">Регистрация</a></p>
      </form>
    </main>
  );
}

export default Login;
