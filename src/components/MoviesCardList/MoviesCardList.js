import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesList,
  formatTime,
}) {
  // console.log(moviesList)
  return (
    <section className="movies-list app__movies-list">
      <ul className="movies-list__cards">
        {moviesList.map((movie, i) => <MoviesCard key={i} movie={movie} formatTime={formatTime}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;
