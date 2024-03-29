import './Portfolio.css';

import linkImg from '../../../images/text__COLOR_font-main.svg'

function Portfolio() {
  return (
    <section className="portfolio app__portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__project-navigation">
        <ul className="portfolio__projects">
          <li className="porfolio__projects-item">
            <a href="https://how-learn.surge.sh/" target="_blank" className="porfolio__projects-item-link">
              <p className="porfolio__projects-item-descr">Статичный сайт</p>
              <img className="porfolio__projects-item-icon"src={linkImg} alt="Иконка стрелки для перехода по ссылке" />
            </a>
          </li>
          <li className="porfolio__projects-item">
            <a href="https://russian-travelll.surge.sh" target="_blank" className="porfolio__projects-item-link">
              <p className="porfolio__projects-item-descr">Адаптивный сайт</p>
              <img className="porfolio__projects-item-icon"src={linkImg} alt="Иконка стрелки для перехода по ссылке" />
            </a>
          </li>
          <li className="porfolio__projects-item">
            <a href="https://denchik730.github.io/react-mesto-auth/" target="_blank" className="porfolio__projects-item-link">
              <p className="porfolio__projects-item-descr">Одностраничное приложение</p>
              <img className="porfolio__projects-item-icon"src={linkImg} alt="Иконка стрелки для перехода по ссылке" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
