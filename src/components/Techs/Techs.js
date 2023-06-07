import './Techs.css';

function Techs() {
  return (
    <section className="techs app__techs">
      <h1 className="section-title">Технологии</h1>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__descr">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__tools">
        <li className="techs__tools-item">HTML</li>
        <li className="techs__tools-item">CSS</li>
        <li className="techs__tools-item">JS</li>
        <li className="techs__tools-item">React</li>
        <li className="techs__tools-item">Git</li>
        <li className="techs__tools-item">Express.js</li>
        <li className="techs__tools-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
