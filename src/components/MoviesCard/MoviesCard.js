import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  formatTime,
  onCardSave,
  onCardDelete,
  savedMovies,
}) {
  let { pathname } = useLocation();

  const isLiked = savedMovies
    ? savedMovies.some((item) => item.movieId === movie.id)
    : false;

  // Обработчик клика лайка
  const handleLikeClick = () => {
    onCardSave(movie);
  };

  // Обработчик клика кнопки удаления
  const handleDeleteClick = () => {
    onCardDelete(movie);
  };

  return (
    <li className="movies-list__card-item">
      <figure className="movie-card">
        <a
          href={movie.trailerLink}
          target="_blank"
          className="movie-card__trailer-link">
          {pathname === '/movies' ? (
            <img
              src={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
              className="movie-card__img"
              alt="Обложка фильма"/>
          ) : (
            <img
              src={movie.thumbnail}
              className="movie-card__img"
              alt="Обложка фильма"/>
          )}
        </a>
        <figcaption className="movie-card__descr">
          <h2 className="movie-card__name">{movie.nameRU}</h2>
          {pathname === '/movies' ? (
            <button
              type="button"
              aria-label="Нравиться"
              className={isLiked ? 'movie-card__like movie-card__like_active' : 'movie-card__like'}
              onClick={handleLikeClick}/>
          ) : (
            <button
              type="button"
              aria-label="Удалить"
              className="movie-card__delete"
              onClick={handleDeleteClick}/>
          )}
          <p className="movie-card__duration">{formatTime(movie.duration)}</p>
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
