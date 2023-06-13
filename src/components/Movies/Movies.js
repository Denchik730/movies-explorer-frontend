import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="movies app__movies">
      <SearchForm/>
      <MoviesCardList/>
      <button className="movies__btn-more">Ещё</button>
    </main>
  );
}

export default Movies;
