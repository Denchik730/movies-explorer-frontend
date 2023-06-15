import './AboutMe.css';

import photo2 from '../../../images/photo_2023-06-07_17-17-27.jpg'

function AboutMe() {
  return (
    <section className="about-me app__about-me">
      <h2 className="about-me__title section-title">Студент</h2>

      <div className="about-me__info-container">
        <div className="about-me__info-text">
          <h3 className="about-me__name">Денис</h3>
          <p className="about-me__post-and-age">Фронтенд-разработчик, 22 года</p>
          <p className="about-me__info-descr">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/Denchik730" target="_blank" className="about-me__github-link github-link">Github</a>
        </div>
        <img src={photo2} alt="Моя фотография" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
