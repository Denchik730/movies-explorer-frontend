import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <li className="movies-list__card-item">
      <figure className="movie-card">
        <img src={props.image} className="movie-card__img" alt="#"/>
        <figcaption className="movie-card__descr">
          <h2 className="movie-card__name">{props.name}</h2>
          <button type="button" aria-label="Нравиться" className="movie-card__like movie-card__delete"></button>
          <p className="movie-card__duration">{props.duration}</p>
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
