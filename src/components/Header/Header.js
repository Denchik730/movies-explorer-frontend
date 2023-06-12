// import { Routes, Route, Link } from 'react-router-dom';

import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {

  return (
    <header className="header app__header">
      <div className="logo"/>
      {/* <nav className="header__navigation">
        <ul className="header__links-movies">
          <li className="header__links-item">
            <a href="#" className="header__movies-link">Фильмы</a>
          </li>
          <li className="header__links-item">
            <a href="#" className="header__movies-link">Сохранённые фильмы</a>
          </li>
        </ul>
      </nav>
      <button className="header__profile-edit-btn">Аккаунт</button> */}
      <nav className="header__wrapper-auth">
        <button className="header__register-btn">Регистрация</button>
        <button className="header__login-btn">Войти</button>
      </nav>
      <button
        className="header__hamburger"
        type="button"
      />
      <MobileMenu/>
    </header>
  );
}

export default Header;
