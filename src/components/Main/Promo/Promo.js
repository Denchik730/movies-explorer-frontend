import './Promo.css';

function Promo() {
  return (
    <section className="promo app__promo">
        <div className="promo__web-pic"></div>

        <div className="promo__wrapper-info">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__descr">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#about-project" className="promo__about-link">Узнать больше</a>
        </div>


    </section>
  );
}

export default Promo;
