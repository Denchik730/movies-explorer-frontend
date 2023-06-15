import './AboutProject.css';

function AboutProject() {
  return (
    <section id="about-project" className="about-project app__about-project">
      <h2 className="about-project__title section-title">О проекте</h2>
      <div className="about-project__info-diplom">
          <h3 className="about-project__stages-title about-project__info-diplom-title">Дипломный проект включал 5 этапов</h3>
          <h3 className="about-project__duration-title about-project__info-diplom-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__stages-descr about-project__info-diplom-descr">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="about-project__duration-descr about-project__info-diplom-descr">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__timeline-diplom">
        <div className="about-project__backend-weeks about-project__timeline-diplom-item">1 неделя</div>
        <div className="about-project__frontend-weeks about-project__timeline-diplom-item">4 недели</div>
        <div className="about-project__backend-descr about-project__timeline-diplom-item">Back-end</div>
        <div className="about-project__frontend-descr about-project__timeline-diplom-item">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
