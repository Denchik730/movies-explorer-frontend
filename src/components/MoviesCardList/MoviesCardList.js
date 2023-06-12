import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

import movie1 from '../../images/movie1.jpg'
import movie2 from '../../images/movie2.jpg'
import movie3 from '../../images/movie3.jpg'
import movie4 from '../../images/movie4.jpg'
import movie5 from '../../images/movie5.jpg'
import movie6 from '../../images/movie6.jpg'
import movie7 from '../../images/movie7.jpg'
import movie8 from '../../images/movie8.jpg'
import movie9 from '../../images/movie9.jpg'
import movie10 from '../../images/movie10.jpg'
import movie11 from '../../images/movie11.jpg'
import movie12 from '../../images/movie12.jpg'

const moviesList = [
  {
    image: movie1,
    name: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    image: movie2,
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 3м',
  },
  {
    image: movie3,
    name: 'В погоне за Бенкси',
    duration: '1ч 42м',
  },
  {
    image: movie4,
    name: 'Баския: Взрыв реальности',
    duration: '1ч 21м',
  },
  {
    image: movie5,
    name: 'Бег это свобода',
    duration: '1ч 44м',
  },
  {
    image: movie6,
    name: 'Книготорговцы',
    duration: '1ч 37м',
  },
  {
    image: movie7,
    name: 'Когда я думаю о Германии ночью',
    duration: '1ч 56м',
  },
  {
    image: movie8,
    name: 'Gimme Danger: История Игги и The Stooge...',
    duration: '1ч 59м',
  },
  {
    image: movie9,
    name: 'Дженис: Маленькая девочка грустит',
    duration: '1ч 42м',
  },
  {
    image: movie10,
    name: 'Соберись перед прыжком',
    duration: '1ч 10м',
  },
  {
    image: movie11,
    name: 'Пи Джей Харви: A dog called money',
    duration: '1ч 4м',
  },
  {
    image: movie12,
    name: 'По волнам: Искусство звука в кино',
    duration: '1ч 7м',
  },
]

function MoviesCardList() {
  return (
    <section className="movies-list app__movies-list">
      <ul className="movies-list__cards">
        {moviesList.map((item, i) => <MoviesCard key={i} image={item.image} name={item.name} duration={item.duration}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;
