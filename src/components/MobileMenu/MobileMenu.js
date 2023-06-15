import './MobileMenu.css'

import { NavLink } from 'react-router-dom';

function MobileMenu(props) {
  return (
    <div className={`mobile-menu ${props.isOpen ? 'mobile-menu_opened' : ''}`}>
      <div className="mobile-menu__container">
        <button onClick={props.handleClose} className="mobile-menu__close"/>
        <nav className="mobile-menu__content">
          <ul className="mobile-menu__links">
            <li className="mobile-menu__links-item">
              <NavLink to="/" className={({isActive}) => 'mobile-menu__link' + (isActive ? " mobile-menu__link_active" : "")}>Главная</NavLink>
            </li>
            <li className="mobile-menu__links-item">
              <NavLink to="/movies" className={({isActive}) => 'mobile-menu__link' + (isActive ? " mobile-menu__link_active" : "")}>Фильмы</NavLink>
            </li>
            <li className="mobile-menu__links-item">
              <NavLink to="/saved-movies" className={({isActive}) => 'mobile-menu__link' + (isActive ? " mobile-menu__link_active" : "")}>Сохранённые фильмы</NavLink>
            </li>
          </ul>

          <NavLink to="/profile" className="mobile-menu__profile-edit">Аккаунт</NavLink>
        </nav>
      </div>
    </div>

  );
}

export default MobileMenu;
