import './AboutMe.css';

import photo1 from '../../../images/jevKMA9UEQ0y9fBgFSX8-KnWwQaIAVw84YkxzcqMx4ZMN5aelaZmnsFRbxYnIgMrQe4Qvqa4nCD9R4R63aP6dEE0.jpg'
import photo2 from '../../../images/photo_2023-06-07_17-17-27.jpg'
import photo3 from '../../../images/Изображение WhatsApp 2023-01-19 в 13.25.32.jpg'

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
          <a href="#" className="about-me__github-link github-link">Github</a>
        </div>
        <img src={photo2} alt="" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
