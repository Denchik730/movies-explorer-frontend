import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';

function MoviesCardList({
  moviesList,
  onCardSave,
  onCardDelete,
  savedMovies,
  formatTime,
}) {
  let { pathname } = useLocation();

  return (
    <section className="movies-list app__movies-list">
      <ul className="movies-list__cards">
        {moviesList.map((movie, i) => (
          <MoviesCard
            key={pathname === '/movies' ? movie.id : movie.movieId}
            movie={movie}
            formatTime={formatTime}
            onCardSave={onCardSave}
            onCardDelete={onCardDelete}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
