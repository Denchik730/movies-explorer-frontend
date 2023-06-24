import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesList,
  formatTime,
  onCardSave,
  onCardDelete,
  savedMovies,
}) {
  console.log(moviesList)
  console.log(savedMovies)
  return (
    <section className="movies-list app__movies-list">
      <ul className="movies-list__cards">
        {moviesList.map((movie, i) => (
          <MoviesCard
            key={i}
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
