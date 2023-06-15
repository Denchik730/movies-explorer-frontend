import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  let { pathname } = useLocation();

  return (
    <header className={pathname === '/' ? 'header header_type_landing app__header' : 'header app__header'}>
      <Link to="/" className="logo"/>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav className="header__wrapper-auth">
                <Link to="/signup" className="header__register-btn">Регистрация</Link>
                <Link to="/signin" className="header__login-btn">Войти</Link>
              </nav>
            </>
          }/>

        <Route
          path="/movies"
          element={
            <>
              <Navigation/>
              <Link to="/profile" className="header__profile-edit-btn">Аккаунт</Link>
              <button
                className="header__hamburger"
                type="button"/>
            </>
          }/>

        <Route
          path="/saved-movies"
          element={
            <>
              <Navigation/>
              <Link to="/profile" className="header__profile-edit-btn">Аккаунт</Link>
              <button
                className="header__hamburger"
                type="button"/>
            </>
          }/>


        <Route
          path="/profile"
          element={
            <>
              <Navigation/>
              <Link to="/profile" className="header__profile-edit-btn">Аккаунт</Link>
              <button
                className="header__hamburger"
                type="button"/>
            </>
          }/>
      </Routes>
      {/* <Navigation/> */}
      {/* <button className="header__profile-edit-btn">Аккаунт</button> */}
      {/* <nav className="header__wrapper-auth">
        <button className="header__register-btn">Регистрация</button>
        <button className="header__login-btn">Войти</button>
      </nav> */}
      {/* <button
        className="header__hamburger"
        type="button"
      /> */}
      <MobileMenu/>
    </header>
  );
}

export default Header;
