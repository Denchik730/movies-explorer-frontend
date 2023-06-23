import './Header.css'

import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header( {loggedIn} ) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let { pathname } = useLocation();

  const handleHamburger = () => {
    setIsMobileMenuOpen(true);
  }

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={pathname === '/' ? 'header header_type_landing app__header' : 'header app__header'}>
      <Link to="/" className="logo"/>

      {loggedIn ? (
        <>
          <Navigation/>
          <Link to="/profile" className="header__profile-edit-btn">Аккаунт</Link>
          <button
            onClick={handleHamburger}
            className="header__hamburger"
            type="button"/>
        </>
      ) : (
        <nav className="header__wrapper-auth">
          <Link to="/signup" className="header__register-btn">Регистрация</Link>
          <Link to="/signin" className="header__login-btn">Войти</Link>
        </nav>
      )}
      {/* <Routes>
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
                onClick={handleHamburger}
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
                onClick={handleHamburger}
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
                onClick={handleHamburger}
                className="header__hamburger"
                type="button"/>
            </>
          }/>
      </Routes> */}
      <MobileMenu isOpen={isMobileMenuOpen} handleClose={handleCloseMenu}/>
    </header>
  );
}

export default Header;
