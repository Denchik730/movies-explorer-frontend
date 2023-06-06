import './Promo.css';

// import Header from '../Header/Header';

function Promo() {
  return (
    <section className="promo">
        <div className="promo__web-pic"></div>

        <div className="promo__wrapper-info">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__descr">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__about-btn">Узнать больше</button>
        </div>


    </section>
  );
}

export default Promo;
