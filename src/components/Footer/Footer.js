import './Footer.css';

function Footer() {
  return (
    <footer className="footer app__footer">
      <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper-info">
        <p className="footer__data">&copy; {new Date().getFullYear()}</p>
        <div className="footer__wrapper-links">
          <a href="" className="footer__link">Яндекс.Практикум</a>
          <a href="" className="footer__link github__link">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
