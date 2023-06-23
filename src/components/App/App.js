import './App.css';

import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Tooltip from '../Tooltip/Tooltip';

import mainApi from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';

import { BASE_URL_MAIN_API } from '../../utils/constants';
import errorImg from '../../images/popup-error.png'

function App() {
  const [beatFilmsMovies, setBeatFilmsMovies] = useState(
    JSON.parse(localStorage.getItem('beatFilmsMovies')) ?? null
  );
  const [beatFilmsSearchQuery, setBeatFilmsSearchQuery] = useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  );
  const [beatFilmsIsShort, setBeatFilmsIsShort] = useState(
    JSON.parse(localStorage.getItem('beatFilmsIsShort')) ?? false
  );
  const [beatFilmsInputValue, setBeatFilmsInputValue] = useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  );

  const [savedMovies, setSavedMovies] = useState(null);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState('');
  const [savedMoviesIsShort, setSavedMoviesIsShort] = useState(false);
  const [savedMoviesInputValue, setSavedMoviesInutValue] = useState('');

  const [searchError, setSearchError] = useState('');
  const [isLoadingBeatFilms, setIsLoadingBeatFilms] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [isInfoTooltipMessage, setIsInfoTooltipMessage] = useState({
    image: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleResize = React.useCallback(() => {
    setTimeout(() => setWindowSize(window.innerWidth), 100);
  });

  console.log(beatFilmsMovies)
  React.useEffect(() => {
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

  React.useEffect(() => {
    checkToken();
  }, []);

  const handleIsLogged = () => {
    setLoggedIn(true);
  };

  React.useEffect(() => {
    setIsLoadingBeatFilms(true);
    getMovies()
      .then((movies) => {
        console.log(movies)
        setBeatFilmsMovies(movies);
        localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
      })
      .catch((err) => setSearchError(err))
      .finally(() => setIsLoadingBeatFilms(false));
  }, [])

  React.useEffect(() => {
    localStorage.setItem('beatFilmsSearchQuery', beatFilmsSearchQuery);
    localStorage.setItem('beatFilmsIsShort', beatFilmsIsShort);
  }, [beatFilmsSearchQuery, beatFilmsIsShort]);

  const flterMoviesBySearch = React.useCallback((movies, searchQuery, isShort) => {
    if (!movies) {
      return null;
    }

    return movies.filter((movie) => {
      return (isShort ? movie.duration < 40 : movie) &&
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  const filteredMovies = flterMoviesBySearch(beatFilmsMovies, beatFilmsSearchQuery, beatFilmsIsShort);
  console.log(filteredMovies)

  const checkToken = () => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            // setEmailUser(data.data.email);
            handleIsLogged();
            navigate("/movies", { replace: true });
          }
        })
        .catch((e) => {
          // setIsTooltipActive(true);

          if (e === 400) {
            console.log(`Ошибка: ${e} - Токен не передан или передан не в том формате`);
          }
          if (e === 401) {
            console.log(`Ошибка: ${e} - Переданный токен некорректен`);
          }
        });
    }
  };

  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((data) => {
        // navigate("/signin", { replace: true });
        handleLogin(email, password)
      })
      .catch((e) => {
        setIsTooltipActive(true);
        console.log(e)
        if (e === 400) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: 'Некорректно заполнено одно из полей',
          });
        }

        if (e === 409) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: 'Пользователь с указанной почтой уже существует',
          });
        }

        if (e === 500) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: 'Ошибка сервера, попробуйте ещё раз чуть позже',
          });
        }
      })
  };

  const handleLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          handleIsLogged();
          // setEmailUser(email);
          navigate("/movies", { replace: true });
        }
      })
      .catch((e) => {
        if (e === 400) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: 'Некорректно заполнено одно из полей',
          });
        }

        if (e === 401) {
          setIsInfoTooltipMessage({
            image: errorImg,
            description: 'Пользователь с таким email не найден`',
          });
        }

        if (e === 500) {
          setIsInfoTooltipMessage({
            image: errorImg,
            caption: 'Ошибка сервера, попробуйте ещё раз чуть позже`',
          });
        }
      });
  };

  const handleSignout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    // setIsMobileMenuOpen(false);
    navigate("/signin", { replace: true });
  };

  const handleLikeClick = (movie) => {
    const isMovieSaved = savedMovies.some((item) => item.movieId === movie.id);
    if (!isMovieSaved) {
      mainApi
        .addNewMovies({
          movieId: movie.id,
          nameRU: movie.nameRU,
          image: BASE_URL_MAIN_API + movie.image.url,
          trailerLink: movie.trailerLink,
          duration: movie.duration,
          country: movie.country,
          director: movie.director,
          year: movie.year,
          description: movie.description,
          thumbnail: BASE_URL_MAIN_API + movie.image.formats.thumbnail.url,
          owner: movie.owner,
          nameEN: movie.nameEN,
        })
        .then((savedMovie) => setSavedMovies([savedMovie, ...savedMovies]))
        .catch((err) => console.log(err, err.status, err.message));
    } else {
      const savedMovieId = savedMovies.find(
        (item) => item.movieId === movie.id
      )._id;
      mainApi
        .deleteSavedMovie(savedMovieId)
        .then(() => {
          setSavedMovies((state) =>
            state.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((err) => console.log(err, err.status, err.message));
    }
  };

  const [isOpenErrorModal, setIsOpenErrorModal] = React.useState(false);
  let { pathname } = useLocation();

  const handleSubmitProfileWithErr = (e) => {
    e.preventDefault();
    setIsOpenErrorModal(true);
  }

  // Закрытие модальных окон
  const closeModal = () => {
    setIsTooltipActive(false);
  };

  return (
    <div className="app">
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? <Header/> : null}

      <Routes>
        <Route
          path="/"
          element={<Main/>}/>

        <Route
          path="/movies"
          element={
            <ProtectedRoute
              element={Movies}
              beatFilmsMovies={filteredMovies}
              inputValue={beatFilmsInputValue}
              setInputValue={setBeatFilmsInputValue}
              isShort={beatFilmsIsShort}
              setIsShort={setBeatFilmsIsShort}
              searchQuery={beatFilmsSearchQuery}
              setSearchQuery={setBeatFilmsSearchQuery}
              windowSize={windowSize}
              isLoading={isLoadingBeatFilms}
              searchError={searchError}
              formatTime={formatTime}
              onCardSave={handleLikeClick}
              saveMovies={savedMovies}
              loggedIn={loggedIn}
            />}
        />

        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
            />
          }/>

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
              onSubmit={handleSubmitProfileWithErr}
              loggedIn={loggedIn}
              handleSignout={handleSignout}
            />}
          />

        <Route
          path="/signup"
          element={
            <Register
              handleRegister={handleRegister}
            />}
        />

        <Route
          path="/signin"
          element={
            <Login
              handleLogin={handleLogin}
            />}
          />

        <Route
          path="*"
          element={
            loggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
      </Routes>

      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer/> : null}

      <Tooltip
        isTooltipActive={isTooltipActive}
        isOpen={isOpenErrorModal}
        onClose={closeModal}
        description={isInfoTooltipMessage.description}
        image={isInfoTooltipMessage.image}
      />
    </div>
  );
}

export default App;
