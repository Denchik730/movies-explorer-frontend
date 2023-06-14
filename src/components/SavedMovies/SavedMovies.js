import './SavedMovies.css';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="saved-movies app_saved-movies">
      <SearchForm/>
      <MoviesCardList/>
    </main>
  );
}

export default SavedMovies;
