import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  let { pathname } = useLocation();

  return (
    <li className="movies-list__card-item">
      <figure className="movie-card">
        <img src={`https://api.nomoreparties.co/${props.image}`} className="movie-card__img" alt="Обложка фильма"/>
        <figcaption className="movie-card__descr">
          <h2 className="movie-card__name">{props.name}</h2>
          <button type="button" aria-label="Нравиться" className={pathname === '/movies' ? 'movie-card__like' : 'movie-card__delete'}/>
          <p className="movie-card__duration">{props.duration}</p>
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
