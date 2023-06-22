import './App.css';

import React from 'react';
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

import ErrorMessageModal from '../ErrorMessageModal/ErrorMessageModal';

import mainApi from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';

import { BASE_URL_MAIN_API } from '../../utils/constants';

function App() {
  const [beatFilmsMovies, setBeatFilmsMovies] = React.useState(
    JSON.parse(localStorage.getItem('beatFilmsMovies')) ?? null
  );
  const [beatFilmsSearchQuery, setBeatFilmsSearchQuery] = React.useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  );
  const [beatFilmsIsShort, setBeatFilmsIsShort] = React.useState(
    JSON.parse(localStorage.getItem('beatFilmsIsShort')) ?? false
  );
  const [beatFilmsInputValue, setBeatFilmsInputValue] = React.useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  );

  const [savedMovies, setSavedMovies] = React.useState(null);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = React.useState('');
  const [savedMoviesIsShort, setSavedMoviesIsShort] = React.useState(false);
  const [savedMoviesInputValue, setSavedMoviesInutValue] = React.useState('');

  const [searchError, setSearchError] = React.useState('');
  const [isLoadingBeatFilms, setIsLoadingBeatFilms] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const [loggedIn, setLoggedIn] = React.useState(false);

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

  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((data) => {
        navigate("/signin", { replace: true });
      })
      .catch((e) => {
        if (e === 400) {
          console.log(`Ошибка: ${e} - некорректно заполнено одно из полей`);
        }
      })
      .finally(() => {
      });
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

  const handleCloseBtnModal = () => {
    setIsOpenErrorModal(false);
  }

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
            />}
        />

        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={SavedMovies}
            />
          }/>

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
              onSubmit={handleSubmitProfileWithErr}
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
          element={<Login/>}/>

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

      <ErrorMessageModal isOpen={isOpenErrorModal} onClose={handleCloseBtnModal}/>
    </div>
  );
}

export default App;
