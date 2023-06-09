import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* <Main/> */}
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
