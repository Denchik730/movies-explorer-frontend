import './Profile.css';

import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({
  handleSignout,
  handleEditProfile,
  isFetching,
}) {
  const {values, handleChange, resetForm, errors, isValid, setValues} = useFormWithValidation();

  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = values
    handleEditProfile(name, email);
  }

  const isButtonAble =
    isValid &&
    (values.name !== currentUser.name ||
    values.email !== currentUser.email) &&
    !isFetching;

  return (
    <main className="profile app__profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>

        <form onSubmit={handleSubmit} className="profile__form">
          <fieldset className="profile__form-fieldset">
            <ul role="none" className="profile__form-inputs">
              <li className="profile__form-inputs-item">
                <label htmlFor="profile__input-name" className="profile__input-label">Имя</label>
                <input
                  name="name"
                  id="profile__input-name"
                  type="text"
                  className="profile__input"
                  required
                  minLength={2}
                  maxLength={30}
                  value={values.name || ''}
                  onChange={handleChange}/>
              </li>
              <span className={`profile__input-error ${errors.name && 'profile__input-error_active'} profile__input-name-error`}>{errors.name || ''}</span>
              <li className="profile__form-inputs-item">
                <label htmlFor="profile__input-email" className="profile__input-label">E-mail</label>
                <input
                  name="email"
                  id="profile__input-email"
                  type="email"
                  className="profile__input"
                  required
                  pattern="^.+@.+\..+$"
                  value={values.email || ''}
                  onChange={handleChange}/>
              </li>
              <span className={`profile__input-error ${errors.email && 'profile__input-error_active'} profile__input-email-error`}>{errors.email || ''}</span>
            </ul>
          </fieldset>

          <button
            disabled={!isButtonAble}
            type="submit"
            className={`profile__btn-submit ${!isButtonAble && 'profile__btn-submit_inactive'}`}>
              Редактировать
          </button>
          <button
            onClick={handleSignout}
            className="profile__log-out">
              Выйти из аккаунта
          </button>
        </form>
      </div>
    </main>
  );
}

export default Profile;
