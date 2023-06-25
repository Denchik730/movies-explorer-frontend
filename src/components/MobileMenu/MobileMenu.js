import './MobileMenu.css'

import { NavLink } from 'react-router-dom';

function MobileMenu( {
  isOpen,
  handleClose
}) {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu_opened' : ''}`}>
      <div className="mobile-menu__container">
        <button onClick={handleClose} className="mobile-menu__close"/>
        <nav className="mobile-menu__content">
          <ul className="mobile-menu__links">
            <li className="mobile-menu__links-item">
              <NavLink
                to="/"
                className={({isActive}) =>
                  'mobile-menu__link' + (isActive ?
                  " mobile-menu__link_active" :
                  "")}
                  onClick={handleClose}
              >
                Главная
              </NavLink>
            </li>
            <li className="mobile-menu__links-item">
              <NavLink
                  to="/movies"
                  className={({isActive}) =>
                    'mobile-menu__link' + (isActive ?
                    " mobile-menu__link_active" :
                    "")}
                    onClick={handleClose}
                >
                  Фильмы
                </NavLink>
            </li>
            <li className="mobile-menu__links-item">
              <NavLink
                to="/saved-movies"
                className={({isActive}) =>
                  'mobile-menu__link' + (isActive ?
                  " mobile-menu__link_active" :
                  "")}
                  onClick={handleClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/profile"
            className="mobile-menu__profile-edit"
            onClick={handleClose}>
            Аккаунт
          </NavLink>
        </nav>
      </div>
    </div>

  );
}

export default MobileMenu;
