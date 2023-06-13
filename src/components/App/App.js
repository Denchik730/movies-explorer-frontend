import './App.css';

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
  return (
    <div className="app">
      <Header/>
      <Main/>
      {/* <Movies/> */}
      {/* <SavedMovies/> */}
      {/* <Profile/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <PageNotFound/> */}
      <ErrorMessageModal/>
      <Footer/>
    </div>
  );
}

export default App;
