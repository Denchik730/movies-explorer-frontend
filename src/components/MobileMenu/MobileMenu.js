import './MobileMenu.css'

import { NavLink } from 'react-router-dom';

import { PAGES } from '../../utils/constants';

function MobileMenu( {
  isOpen,
  handleClose,
  handleOverlay,
}) {
  return (
    <div
      className={`mobile-menu ${isOpen ? 'mobile-menu_opened' : ''}`}
      onClick={handleOverlay}>
      <div className="mobile-menu__container">
        <button onClick={handleClose} className="mobile-menu__close"/>
        <nav className="mobile-menu__content">
          <ul className="mobile-menu__links">
            <li className="mobile-menu__links-item">
              <NavLink
                to={PAGES.PAGE_MAIN}
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
                  to={PAGES.PAGE_MOVIES}
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
                to={PAGES.PAGE_SAVED_MOVIES}
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
            to={PAGES.PAGE_PROFILE}
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
