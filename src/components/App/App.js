import './App.css';

import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

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

function App() {
  let { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className="app">
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? <Header/> : null}

      <Routes>
        <Route
          path="/"
          element={<Main/>}/>

        <Route
          path="/movies"
          element={<Movies/>}/>

        <Route
          path="/saved-movies"
          element={<SavedMovies/>}/>

        <Route
          path="/profile"
          element={<Profile/>}/>

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
    </div>
  );
}

export default App;
