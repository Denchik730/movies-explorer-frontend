import './App.css';

import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

import ErrorMessageModal from '../ErrorMessageModal/ErrorMessageModal';

import { getMovies } from '../../utils/MoviesApi';

function App() {
  const [beatFilmsMovies, setBeatFilmsMovies] = React.useState(null);
  const [beatFilmsSearchQuery, setBeatFilmsSearchQuery] = React.useState('');
  const [beatFilmsIsShort, setBeatFilmsIsShort] = React.useState('');
  const [beatFilmsInputValue, setBeatFilmsInputValue] = React.useState(''); // Двустороннее связывание для инпута

  const [searchError, setSearchError] = React.useState('');
  const [isLoadingBeatFilms, setIsLoadingBeatFilms] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const handleResize = React.useCallback(() => {
    setWindowSize(window.innerWidth);
  });

  // Устанавливаю слушатель событий на размер окна
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  React.useEffect(() => {
    setIsLoadingBeatFilms(true);
    getMovies()
      .then((movies) => {
        setBeatFilmsMovies(movies);
        localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
      })
      .catch((err) => setSearchError(err))
      .finally(() => setIsLoadingBeatFilms(false));
  }, []);

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
            <Movies
              beatFilmsMovies={beatFilmsMovies}
              inputValue={beatFilmsInputValue}
              setInputValue={setBeatFilmsInputValue}
              isShort={beatFilmsIsShort}
              setIsShort={setBeatFilmsIsShort}
              searchQuery={beatFilmsSearchQuery}
              setSearchQuery={setBeatFilmsSearchQuery}
              windowSize={windowSize}
              isLoading={isLoadingBeatFilms}
              searchError={searchError}
            />}
        />

        <Route
          path="/saved-movies"
          element={<SavedMovies/>}/>

        <Route
          path="/profile"
          element={<Profile onSubmit={handleSubmitProfileWithErr}/>}/>

        <Route
          path="/signup"
          element={<Register/>}/>

        <Route
          path="/signin"
          element={<Login/>}/>

        <Route
          path="*"
          element={<PageNotFound/>}/>
      </Routes>

      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer/> : null}

      <ErrorMessageModal isOpen={isOpenErrorModal} onClose={handleCloseBtnModal}/>
    </div>
  );
}

export default App;
