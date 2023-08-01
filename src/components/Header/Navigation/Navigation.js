import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
    <nav className="navigation">
      <ul className="navigation__links-movies">
        <li className="navigation__links-item">
          <NavLink to="/movies" className={({isActive}) => 'navigation__movies-link' + (isActive ? ' navigation__movies-link_active' : '')}>Фильмы</NavLink>
        </li>
        <li className="navigation__links-item">
          <NavLink to="/saved-movies" className={({isActive}) => 'navigation__movies-link' + (isActive ? ' navigation__movies-link_active' : '')}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
