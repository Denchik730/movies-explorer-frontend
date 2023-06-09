import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form app__search-form">
      <form className="search-form__form">
        <fildset className="search-form__find-movie">
          <input type="text" className="search-form__input" placeholder="Фильм"/>
          <button
            type="submit"
            className={`search-form__button-form`}>
          </button>
        </fildset>

        <fildset className="search-form__short-movie">
          <label className='search-form__switch'>
            <input
              className='search-form__checkbox'
              type='checkbox'
            />
            <span className='search-form__slider'></span>
          </label>
          <p className='search-form__short-movies-text'>Короткометражки</p>
        </fildset>
      </form>
    </section>
  );
}

export default SearchForm;
