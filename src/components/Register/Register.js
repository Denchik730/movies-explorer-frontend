import './Register.css';

function Register() {
  return (
    <main className="register app__register">
      <div className="logo"></div>
      <h2 className="auth__title register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__input-label">
          Имя
          <input type="name" className="register__input" />
        </label>
        <label className="register__input-label">
          E-mail
          <input type="email" className="register__input" />
        </label>
        <label className="register__input-label">
          Пароль
          <input type="password" className="register__input" />
        </label>

        <button type="submit" className="register__submit-btn">Зарегистрироваться</button>
        <p className="register__descr-link" href="#">Уже зарегистрированы? <a href="#" className="register__link-login">Войти</a></p>
      </form>
    </main>
  );
}

export default Register;
