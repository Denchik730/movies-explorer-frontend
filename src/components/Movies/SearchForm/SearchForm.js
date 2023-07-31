import './SearchForm.css';

import { useState } from 'react';

function SearchForm({
  inputValue,
  setInputValue,
  isShort,
  setIsShort,
  onSearch,
}) {
  const [emptyInputError, setEmptyInputError] = useState(false);


  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
  }

  // Переключение чекбокса
  const handleCheckbox = () => {
    setIsShort(!isShort)
  }

  // Обработка клика по кнопке поиска
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setEmptyInputError(true);
    } else {
      onSearch(inputValue);
      setEmptyInputError(false);
    }
  }

  return (
    <section className="search-form app__search-form">
      <form
        className="search-form__form"
        onSubmit={handleSubmitSearch}
        noValidate>
        <fildset className="search-form__find-movie">
          <input
            type="text"
            id="search-input-name"
            className="search-form__input"
            placeholder="Фильм"
            required
            value={inputValue}
            onChange={handleSearchInput}
            />
          <button
            type="submit"
            className="search-form__button-form">
          </button>
        </fildset>
        {emptyInputError && (
          <span
            className="search-form__input-error search-form__input-error_active search-input-name-error">
              Нужно ввести ключевое слово
          </span>
        )}

        <fildset className="search-form__short-movie">
          <label className="search-form__switch">
            <input
              className="search-form__checkbox"
              type="checkbox"
              checked={isShort}
              onChange={handleCheckbox}
            />
            <span className="search-form__slider"></span>
          </label>
          <p className="search-form__short-movies-text">Короткометражки</p>
        </fildset>
      </form>
    </section>
  );
}

export default SearchForm;
