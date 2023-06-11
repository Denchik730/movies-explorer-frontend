// import { Routes, Route, Link } from 'react-router-dom';

function Header() {

  return (
    <header className="header app__header">
      <div className="logo"/>
      <div className="header__movies-links-wrapper">
        <a href="#" className="header__movies-link">Фильмы</a>
        <a href="#" className="header__movies-link">Сохранённые фильмы</a>
      </div>
      <button className="header__profile-edit-btn">Аккаунт</button>
      {/* <div className="header__wrapper-auth">
        <button className="header__register-btn">Регистрация</button>
        <button className="header__login-btn">Войти</button>
      </div> */}
      <button
        className="header__hamburger"
        type="button"
      />
    </header>
  );
}

export default Header;
