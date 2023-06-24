import './SavedMovies.css';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { savedMoviesList } from '../../utils/constants';

function SavedMovies({
  movies,
  formatTime,
}) {
  console.log('gggg', movies)
  return (
    <main className="saved-movies app_saved-movies">
      <SearchForm/>
      {/* <MoviesCardList moviesList={savedMoviesList}/> */}
      {!movies ? null : (
        <MoviesCardList
          moviesList={movies}
          formatTime={formatTime}
          // onCardDelete={onCardDelete}
        />
      )}
    </main>
  );
}

export default SavedMovies;
