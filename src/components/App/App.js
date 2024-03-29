import './App.css';

import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Tooltip from '../Tooltip/Tooltip';
import PageNotFound from '../PageNotFound/PageNotFound'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  BASE_URL_MOVIES_API,
  SHORT_MOVIE_DURATION,
  PAGES,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from '../../utils/constants';
import errorImg from '../../images/popup-error.png';
import fetchOK from '../../images/popup-success.png';
import mainApi from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';

function App() {
  const [beatFilmsMovies, setBeatFilmsMovies] = useState(null);
  const [beatFilmsSearchQuery, setBeatFilmsSearchQuery] = useState(
    localStorage.getItem('beatFilmsSearchQuery') || ''
  );
  const [beatFilmsIsShort, setBeatFilmsIsShort] = useState(
    JSON.parse(localStorage.getItem('beatFilmsIsShort')) || false
  );
  const [beatFilmsInputValue, setBeatFilmsInputValue] = useState(
    localStorage.getItem('beatFilmsSearchQuery') || ''
  );
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )

  const [savedMovies, setSavedMovies] = useState(null);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState('');
  const [savedMoviesIsShort, setSavedMoviesIsShort] = useState(false);
  const [savedMoviesInputValue, setSavedMoviesInutValue] = useState('');

  const [searchError, setSearchError] = useState(false);
  const [isLoadingBeatFilms, setIsLoadingBeatFilms] = useState(false);
  const [isFetching, setIsFetching] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [isInfoTooltipMessage, setIsInfoTooltipMessage] = useState({
    image: '',
    description: '',
  });

  const navigate = useNavigate();
  let { pathname } = useLocation();

  useEffect(() => {
    if (loggedIn && (pathname === PAGES.PAGE_SIGNIN || pathname === PAGES.PAGE_SIGNUP)) {
      navigate('/');
    }
  }, [loggedIn])

  const handleResize = useCallback(() => {
    setTimeout(() => setWindowSize(window.innerWidth), 100);
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const formatTime = (minutes) => {
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  };

  const handleIsLogged = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    if (
      !beatFilmsMovies &&
      beatFilmsSearchQuery.length > 0
    ) {
      setIsLoadingBeatFilms(true);
      getMovies()
        .then((movies) => {
          setBeatFilmsMovies(movies);
          localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
        })
        .catch((err) => setSearchError(true))
        .finally(() => setIsLoadingBeatFilms(false));
    }

  }, [beatFilmsMovies, beatFilmsSearchQuery, loggedIn])

  const flterMoviesBySearch = useCallback((movies, searchQuery, isShort) => {
    if (!movies) {
      return null;
    }

    return movies.filter((movie) => {
      return (isShort ? movie.duration < SHORT_MOVIE_DURATION : movie) &&
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  const filteredMovies = flterMoviesBySearch(beatFilmsMovies, beatFilmsSearchQuery, beatFilmsIsShort);

  const filteredSavedMovies = flterMoviesBySearch(savedMovies, savedMoviesSearchQuery, savedMoviesIsShort)

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('beatFilmsSearchQuery', beatFilmsSearchQuery);
      localStorage.setItem('beatFilmsIsShort', JSON.stringify(beatFilmsIsShort));
    }
  }, [loggedIn, beatFilmsSearchQuery, beatFilmsIsShort]);

  const checkToken = useCallback(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            const { _id, name, email } = data;
            setCurrentUser({ _id, name, email });
            handleIsLogged();
            localStorage.setItem('loggedIn', JSON.stringify(true));
          }
        })
        .catch((e) => {
          if (e === REQUEST_ERROR.BAD_REQUEST.CODE) {
            console.log(REQUEST_ERROR.BAD_REQUEST.DESCRIPTION_FOR_TOKEN);
          }
          if (e === REQUEST_ERROR.UNAUTHORIZATION.CODE) {
            console.log(REQUEST_ERROR.UNAUTHORIZATION.DESCRIPTION_FOR_TOKEN);
          }
        });
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  const handleRegister = (name, email, password) => {
    setIsFetching(true);

    mainApi
      .register(name, email, password)
      .then((data) => {
        handleLogin(email, password)
      })
      .catch((e) => {
        setIsTooltipActive(true);

        setIsInfoTooltipMessage({
          image: '',
          description: '',
        });

        console.log(e)
        if (e === REQUEST_ERROR.BAD_REQUEST.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.BAD_REQUEST.DESCRIPTION,
          });
        }

        if (e === REQUEST_ERROR.CONFLICT.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.CONFLICT.DESCRIPTION,
          });
        }

        if (e === REQUEST_ERROR.SERVER_ERROR.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.SERVER_ERROR.DESCRIPTION,
          });
        }
      })
      .finally(() => setIsFetching(false))
  };

  const handleLogin = (email, password) => {
    setIsFetching(true);

    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          handleIsLogged();
          checkToken();
          setToken(data.token);
          navigate(PAGES.PAGE_MOVIES, { replace: true });
        }
      })
      .catch((e) => {
        setIsTooltipActive(true);

        setIsInfoTooltipMessage({
          image: '',
          description: '',
        });

        if (e === REQUEST_ERROR.BAD_REQUEST.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.BAD_REQUEST.DESCRIPTION,
          });
        }

        if (e === REQUEST_ERROR.UNAUTHORIZATION.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.UNAUTHORIZATION.DESCRIPTION,
          });
        }

        if (e === REQUEST_ERROR.SERVER_ERROR.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.SERVER_ERROR.DESCRIPTION,
          });
        }
      })
      .finally(() => setIsFetching(false))
  };

  useEffect(() => {
    if (loggedIn) {
      getLikeFilms(token);
    }
  }, [loggedIn]);

  const getLikeFilms = (token) => {
    mainApi
      .getSavedMovies(token)
      .then((movies) => setSavedMovies(movies))
      .catch((err) => console.log(err));
  }

  const handleEditProfile = ( name, email ) => {
    setIsFetching(true);

    mainApi
      .setProfileUserInfo( name, email, token )
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });

        setIsTooltipActive(true);

        setIsInfoTooltipMessage({
          image: '',
          description: '',
        });

        setIsInfoTooltipMessage({
          image: fetchOK,
          description: REQUEST_SUCCESS.UPDATE_PROFILE.DESCRIPTION,
        });
      })
      .catch((err) => {
        setIsTooltipActive(true);

        setIsInfoTooltipMessage({
          image: '',
          description: '',
        });

        if (err === REQUEST_ERROR.CONFLICT.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.CONFLICT.DESCRIPTION,
          });
        }

        if (err === REQUEST_ERROR.BAD_REQUEST.CODE) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: REQUEST_ERROR.BAD_REQUEST.DESCRIPTION,
          });
        }
      })
      .finally(() => setIsFetching(false))
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('beatFilmsMovies');
    localStorage.removeItem('beatFilmsSearchQuery');
    localStorage.removeItem('beatFilmsIsShort');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('loggedIn');
  }

  const defaultUseState = () => {
    setLoggedIn(false);
    setBeatFilmsMovies(null);
    setBeatFilmsSearchQuery('');
    setBeatFilmsIsShort(false);
    setBeatFilmsInputValue('');
    setSavedMovies(null);
    setSavedMoviesSearchQuery('');
    setSavedMoviesIsShort(false);
    setSavedMoviesInutValue('');
    setCurrentUser({
      _id: '',
      name: '',
      email: '',
    });
  }

  const handleSignout = () => {
    clearLocalStorage();
    defaultUseState();
    navigate(PAGES.PAGE_MAIN, { replace: true });
  };

  const handleLikeClick = (movie) => {
    const isMovieSaved = savedMovies.some((item) => item.movieId === movie.id);
    if (!isMovieSaved) {
      mainApi
        .addNewMovies({
          movieId: movie.id,
          nameRU: movie.nameRU,
          image: BASE_URL_MOVIES_API + movie.image.url,
          trailerLink: movie.trailerLink,
          duration: movie.duration,
          country: movie.country,
          director: movie.director,
          year: movie.year,
          description: movie.description,
          thumbnail: BASE_URL_MOVIES_API + movie.image.formats.thumbnail.url,
          owner: movie.owner,
          nameEN: movie.nameEN,
        }, token)
        .then((savedMovie) => setSavedMovies([savedMovie, ...savedMovies]))
        .catch((err) => console.log(err, err.status, err.message));
    } else {
      const savedMovieId = savedMovies.find(
        (item) => item.movieId === movie.id
      )._id;
      mainApi
        .deleteSavedMovie(savedMovieId, token)
        .then(() => {
          setSavedMovies((state) =>
            state.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((err) => console.log(err, err.status, err.message));
    }
  };

  const handleDeleteClick = (movie) => {
    mainApi
      .deleteSavedMovie(movie._id, token)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch((err) => console.log(err, err.status, err.message));
  };

  const handleHamburger = () => {
    setIsMobileMenuOpen(true);
  }

  // Закрытие модальных окон и мобильного меню
  const closeModal = () => {
    setIsTooltipActive(false);
    setIsMobileMenuOpen(false);
  };

  // Функция закрытия окон по esc
  useEffect(() => {
    if (!isTooltipActive && !isMobileMenuOpen) {
      return;
    }

    const closeByEsc = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeModal();
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [isTooltipActive, isMobileMenuOpen]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app">
        {pathname === PAGES.PAGE_MAIN ||
        pathname === PAGES.PAGE_MOVIES ||
        pathname === PAGES.PAGE_SAVED_MOVIES ||
        pathname === PAGES.PAGE_PROFILE ?
          <Header
            loggedIn={loggedIn}
            isMobileMenuOpen={isMobileMenuOpen}
            onClose={closeModal}
            handleHamburger={handleHamburger}
            handleOverlay={handleOverlay}
          /> : null}

        <Routes>
          <Route
            path={PAGES.PAGE_MAIN}
            element={<Main/>}/>

          <Route
            path={PAGES.PAGE_MOVIES}
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                beatFilmsMovies={filteredMovies}
                searchQuery={beatFilmsSearchQuery}
                setSearchQuery={setBeatFilmsSearchQuery}
                inputValue={beatFilmsInputValue}
                setInputValue={setBeatFilmsInputValue}
                isShort={beatFilmsIsShort}
                setIsShort={setBeatFilmsIsShort}
                windowSize={windowSize}
                isLoading={isLoadingBeatFilms}
                searchError={searchError}
                formatTime={formatTime}
                onCardSave={handleLikeClick}
                savedMovies={savedMovies}
              />}
          />

          <Route
            path={PAGES.PAGE_SAVED_MOVIES}
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                movies={filteredSavedMovies}
                searchQuery={savedMoviesSearchQuery}
                setSearchQuery={setSavedMoviesSearchQuery}
                inputValue={savedMoviesInputValue}
                setInputValue={setSavedMoviesInutValue}
                isShort={savedMoviesIsShort}
                setIsShort={setSavedMoviesIsShort}
                formatTime={formatTime}
                onCardDelete={handleDeleteClick}
              />
            }/>

          <Route
            path={PAGES.PAGE_PROFILE}
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                handleSignout={handleSignout}
                handleEditProfile={handleEditProfile}
                isFetching={isFetching}
              />}
            />

          <Route
            path={PAGES.PAGE_SIGNUP}
            element={
              <Register
                handleRegister={handleRegister}
                isFetching={isFetching}
              />}
          />

          <Route
            path={PAGES.PAGE_SIGNIN}
            element={
              <Login
                handleLogin={handleLogin}
                isFetching={isFetching}
              />}
            />

          <Route
            path="*"
            element={
              <PageNotFound/>
            }
          />
        </Routes>

        {pathname === PAGES.PAGE_MAIN||
        pathname === PAGES.PAGE_MOVIES ||
        pathname === PAGES.PAGE_SAVED_MOVIES ?
          <Footer/> :
          null}

        <Tooltip
          isTooltipActive={isTooltipActive}
          onClose={closeModal}
          description={isInfoTooltipMessage.description}
          image={isInfoTooltipMessage.image}
          handleOverlay={handleOverlay}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
