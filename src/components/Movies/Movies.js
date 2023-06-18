import './Movies.css';

import React from "react";

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesList } from '../../utils/constants';
import { getMovies } from '../../utils/MoviesApi';

function Movies() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    getMovies().then((movies) => {
      console.log(movies)
      setCards(movies);
    });
  }, []);

  return (
    <main className="movies app__movies">
      <SearchForm/>
      <MoviesCardList moviesList={cards}/>
      <button className="movies__btn-more">Ещё</button>
    </main>
  );
}

export default Movies;
