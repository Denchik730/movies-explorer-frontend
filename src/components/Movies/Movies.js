import './Movies.css';

import React from "react";

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { moviesList } from '../../utils/constants';

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
  searchError,
  formatTime,
}) {
  const [viewMoviesCards, setViewMoviesCards] = React.useState(0);

  console.log(beatFilmsMovies)
  // Определяю количество карточек на странице в зависимости от ширины.
  const moviesCards = React.useCallback(() => {
    if (windowSize >= 1280) {
      setViewMoviesCards(12);
    } else if (windowSize >= 768) {
      setViewMoviesCards(8);
    } else {
      setViewMoviesCards(5);
    }
  }, [windowSize]);

  React.useEffect(() => {
    if ((searchQuery.length > 0)) {
      moviesCards();
    }
  }, [searchQuery, isShort, moviesCards]);

  const showMoreMovies = () => {
    if (windowSize >= 1280) {
      setViewMoviesCards(viewMoviesCards + 3);
    } else if (windowSize >= 768) {
      setViewMoviesCards(viewMoviesCards + 2);
    } else {
      setViewMoviesCards(viewMoviesCards + 2);
    }
  };

  const isButtonMoreHidden = () => {
    if (beatFilmsMovies === null || searchQuery.length === 0) {
      return false;
    }

    if (viewMoviesCards >= beatFilmsMovies.length) {
      return false;
    } else {
      return true;
    }
  };

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
      {isLoading ? <Preloader/> : beatFilmsMovies.length > 0 ? <MoviesCardList
        formatTime={formatTime}
        moviesList={
          // beatFilmsMovies ?
             beatFilmsMovies.slice(0, viewMoviesCards)
            // :
            // JSON.parse(localStorage.getItem('beatFilmsMovies'))
        }
      /> :<p className="movies__no-found">Ничего не найдено</p>}
      {isButtonMoreHidden() && <button onClick={showMoreMovies} className="movies__btn-more">Ещё</button>}
    </main>
  );
}

export default Movies;
