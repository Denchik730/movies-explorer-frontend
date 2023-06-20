import './Movies.css';

import React from "react";

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  beatFilmsMovies,
  inputValue,
  setInputValue,
  isShort,
  setIsShort,
  searchQuery,
  setSearchQuery,
  windowSize,
  isLoading,
  searchError
}) {
  const [defaultMoviesCards, setDefaultMoviesCards] = React.useState(0);

  const moviesCards = React.useCallback(() => {
    if (windowSize >= 1280) {
      setDefaultMoviesCards(12);
    } else if (windowSize >= 768) {
      setDefaultMoviesCards(8);
    } else {
      setDefaultMoviesCards(5);
    }
  }, [windowSize]);

  const showMoreMovies = () => {
    if (windowSize >= 1280) {
      setDefaultMoviesCards(defaultMoviesCards + 3);
      console.log(defaultMoviesCards)
    } else if (windowSize >= 768) {
      setDefaultMoviesCards(defaultMoviesCards + 2);
      console.log(defaultMoviesCards)
    } else {
      setDefaultMoviesCards(defaultMoviesCards + 2);
      console.log(defaultMoviesCards)
    }
  };

  const isButtonMoreHidden = () => {
    if (beatFilmsMovies === null || searchQuery.length === 0) {
      return false;
    }
    if (defaultMoviesCards >= beatFilmsMovies.length) {
      return false;
    } else {
      return true;
    }
  };

  React.useEffect(() => {
    if ((searchQuery.length > 0)) {
      moviesCards();
    }
  }, [searchQuery, isShort, moviesCards]);

  const handleSearchButtonClick = (inputValue) => {
    setSearchQuery(inputValue);
  }

  return (
    <main className="movies app__movies">
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        isShort={isShort}
        setIsShort={setIsShort}
        onSearch={handleSearchButtonClick}
      />
      {searchError ? <p className="movies__inputs-search-error">
        Во время запроса произошла ошибка. Возможно, проблема с соединением
        или сервер недоступен. Подождите немного и попробуйте ещё раз.
      </p> : ''}
      {isLoading ? <Preloader/> : <MoviesCardList
        moviesList={
          beatFilmsMovies ?
            beatFilmsMovies.slice(0, defaultMoviesCards)
            :
            JSON.parse(localStorage.getItem('beatFilmsMovies')
        )}
      />}
      {isButtonMoreHidden() && <button onClick={showMoreMovies} className="movies__btn-more">Ещё</button>}
    </main>
  );
}

export default Movies;
