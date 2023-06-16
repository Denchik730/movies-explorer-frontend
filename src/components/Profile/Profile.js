import './Profile.css';

import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <main className="profile app__profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>

        <form onSubmit={props.onSubmit} className="profile__form">
          <fieldset className="profile__form-fieldset">
            <ul role="none" className="profile__form-inputs">
              <li className="profile__form-inputs-item">
                <label htmlFor="profile__input-name" className="profile__input-label">Имя</label>
                <input value={"Den"} name="name" id="profile__input-name" type="text" className="profile__input" required/>
              </li>
              <span className="profile__input-error profile__input-error_active profile__input-name-error">Что-то пошло не так...</span>
              <li className="profile__form-inputs-item">
                <label htmlFor="profile__input-email" className="profile__input-label">E-mail</label>
                <input value={"pochta@yandex.ru"} name="email" id="profile__input-email" type="email" className="profile__input" required/>
              </li>
              <span className="profile__input-error profile__input-error_active profile__input-email-error"></span>
            </ul>
          </fieldset>

          <button className="profile__btn-submit">Редактировать</button>
          <Link to="/" className="profile__log-out">Выйти из аккаунта</Link>
        </form>
      </div>
    </main>
  );
}

export default Profile;
