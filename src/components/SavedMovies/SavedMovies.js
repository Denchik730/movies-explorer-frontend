import './SavedMovies.css';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { savedMoviesList } from '../../utils/constants';

function SavedMovies() {
  return (
    <main className="saved-movies app_saved-movies">
      <SearchForm/>
      <MoviesCardList moviesList={savedMoviesList}/>
    </main>
  );
}

export default SavedMovies;
