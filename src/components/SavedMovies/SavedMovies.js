import './SavedMovies.css';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  movies,
  formatTime,
  onCardDelete,
  setSearchQuery,
  isShort,
  setIsShort,
  inputValue,
  setInputValue,
}) {

  const handleSearchButtonClick = (inputValue) => {
    setSearchQuery(inputValue);
  }

  return (
    <main className="saved-movies app_saved-movies">
      <SearchForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        isShort={isShort}
        setIsShort={setIsShort}
        onSearch={handleSearchButtonClick}
      />
      {!movies ? null : (
        <MoviesCardList
          moviesList={movies}
          formatTime={formatTime}
          onCardDelete={onCardDelete}
        />
      )}
    </main>
  );
}

export default SavedMovies;
