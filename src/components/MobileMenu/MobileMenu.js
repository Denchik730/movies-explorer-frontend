import './MobileMenu.css'

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__container">
        <button className="mobile-menu__close"/>
        <nav className="mobile-menu__content">
          <ul className="mobile-menu__links">
            <li className="mobile-menu__links-item">
              <a href="" className="mobile-menu__link">Главная</a>
            </li>
            <li className="mobile-menu__links-item">
              <a href="" className="mobile-menu__link">Фильмы</a>
            </li>
            <li className="mobile-menu__links-item">
              <a href="" className="mobile-menu__link">Сохранённые фильмы</a>
            </li>
          </ul>

          <a href="#" className="mobile-menu__profile-edit">Аккаунт</a>
        </nav>
      </div>
    </div>

  );
}

export default MobileMenu;
