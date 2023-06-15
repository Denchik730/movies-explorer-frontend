import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {
  return (
    <section className="movies-list app__movies-list">
      <ul className="movies-list__cards">
        {moviesList.map((item, i) => <MoviesCard key={i} image={item.image} name={item.name} duration={item.duration}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;
