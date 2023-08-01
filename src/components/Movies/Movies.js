import './Movies.css';

import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { BIG_DEVICE, MIDDLE_DEVICE, SMALL_DEVICE, SEARCH_SERVER_ERROR_DESCR, MOVIES_NOT_FOUND_DESCR } from '../../utils/constants';

function Movies({
  beatFilmsMovies,
  searchQuery,
  setSearchQuery,
  inputValue,
  setInputValue,
  isShort,
  setIsShort,
  windowSize,
  isLoading,
  searchError,
  formatTime,
  onCardSave,
  savedMovies,
}) {
  const [viewMoviesCards, setViewMoviesCards] = React.useState(0);

  const moviesCards = React.useCallback(() => {
    if (windowSize >= 1280) {
      setViewMoviesCards(BIG_DEVICE.DEFAULT_CARDS);
    } else if (windowSize >= 768) {
      setViewMoviesCards(MIDDLE_DEVICE.DEFAULT_CARDS);
    } else {
      setViewMoviesCards(SMALL_DEVICE.DEFAULT_CARDS);
    }
  }, [windowSize]);

  React.useEffect(() => {
    if ((searchQuery.length > 0)) {
      moviesCards();
    }
  }, [searchQuery, isShort, moviesCards]);

  const showMoreMovies = () => {
    if (windowSize >= BIG_DEVICE.SIZE_PX) {
      setViewMoviesCards(viewMoviesCards + BIG_DEVICE.ADD_CARDS);
    } else if (windowSize >= MIDDLE_DEVICE.SIZE_PX) {
      setViewMoviesCards(viewMoviesCards + MIDDLE_DEVICE.ADD_CARDS);
    } else {
      setViewMoviesCards(viewMoviesCards + SMALL_DEVICE.ADD_CARDS);
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
      {searchError ? <p className="movies__inputs-search-error">{SEARCH_SERVER_ERROR_DESCR}</p> : ''}
      {
        !beatFilmsMovies ? null : (
          isLoading ? <Preloader/> : beatFilmsMovies.length > 0 ? <MoviesCardList
          formatTime={formatTime}
          onCardSave={onCardSave}
          savedMovies={savedMovies}
          moviesList={
            beatFilmsMovies.slice(0, viewMoviesCards)
          }
          /> :<p className="movies__no-found">{MOVIES_NOT_FOUND_DESCR}</p>
        )
      }

      {isButtonMoreHidden() && <button onClick={showMoreMovies} className="movies__btn-more">Ещё</button>}
    </main>
  );
}

export default Movies;
