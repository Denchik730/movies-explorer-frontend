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
        {moviesList.map((item, i) => <MoviesCard key={i} image={item.image.formats.thumbnail.url} name={item.nameRU} duration={formatTime(item.duration)}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;
