// import { Routes, Route, Link } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {

  return (
    <header className="header app__header">
      <div className="logo"/>
      <Navigation/>
      <button className="header__profile-edit-btn">Аккаунт</button>
      {/* <nav className="header__wrapper-auth">
        <button className="header__register-btn">Регистрация</button>
        <button className="header__login-btn">Войти</button>
      </nav> */}
      <button
        className="header__hamburger"
        type="button"
      />
      <MobileMenu/>
    </header>
  );
}

export default Header;
