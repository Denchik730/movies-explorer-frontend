import './Profile.css';

function Profile() {
  return (
    <main className="profile app__profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>

        <form className="profile__form">
          <div className="profile__input-wrapper">
            <label htmlFor="profile__input-name" className="profile__input-label">Имя</label>
            <input value={"Den"} name="name" id="profile__input-name" type="text" className="profile__input" />
          </div>

          <div className="profile__input-wrapper">
            <label htmlFor="profile__input-email" className="profile__input-label">E-mail</label>
            <input value={"pochta@yandex.ru"} name="email" id="profile__input-email" type="email" className="profile__input" />
          </div>

          <button className="profile__btn-submit">Редактировать</button>
          <button className="profile__log-out">Выйти из аккаунта</button>
        </form>
      </div>
    </main>
  );
}

export default Profile;
