import './Navigation.css'
// import { Routes, Route, Link } from 'react-router-dom';

function Navigation() {

  return (
    <nav className="navigation">
      <ul className="navigation__links-movies">
        <li className="navigation__links-item">
          <a href="#" className="navigation__movies-link">Фильмы</a>
        </li>
        <li className="navigation__links-item">
          <a href="#" className="navigation__movies-link">Сохранённые фильмы</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
