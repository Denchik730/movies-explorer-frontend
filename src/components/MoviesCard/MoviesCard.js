import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  formatTime,
}) {
  let { pathname } = useLocation();

  return (
    <li className="movies-list__card-item">
      <figure className="movie-card">
        <a href={movie.trailerLink} target='_blank' className="movie-card__trailer-link">
          <img src={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`} className="movie-card__img" alt="Обложка фильма"/>
        </a>
        <figcaption className="movie-card__descr">
          <h2 className="movie-card__name">{movie.nameRU}</h2>
          <button type="button" aria-label="Нравиться" className={pathname === '/movies' ? 'movie-card__like' : 'movie-card__delete'}/>
          <p className="movie-card__duration">{formatTime(movie.duration)}</p>
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
