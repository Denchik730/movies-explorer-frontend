import './Header.css'

import { Link, useLocation } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import { PAGES } from '../../utils/constants';

function Header( {
  loggedIn,
  isMobileMenuOpen,
  onClose,
  handleHamburger,
  handleOverlay,
}) {
  let { pathname } = useLocation();

  return (
    <header className={pathname === '/' ? 'header header_type_landing app__header' : 'header app__header'}>
      <Link to={PAGES.PAGE_MAIN} className="logo"/>

      {loggedIn ? (
        <>
          <Navigation/>
          <Link to={PAGES.PAGE_PROFILE} className="header__profile-edit-btn">Аккаунт</Link>
          <button
            onClick={handleHamburger}
            className="header__hamburger"
            type="button"/>
        </>
      ) : (
        <nav className="header__wrapper-auth">
          <Link to={PAGES.PAGE_SIGNUP} className="header__register-btn">Регистрация</Link>
          <Link to={PAGES.PAGE_SIGNIN} className="header__login-btn">Войти</Link>
        </nav>
      )}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleClose={onClose}
        handleOverlay={handleOverlay}/>
    </header>
  );
}

export default Header;
