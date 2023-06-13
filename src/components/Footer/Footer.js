import './Footer.css';

function Footer() {
  return (
    <footer className="footer app__footer">
      <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper-info">
        <p className="footer__data">&copy; {new Date().getFullYear()}</p>
        <nav className="footer__navigation-links">
          <ul className="footer__links">
            <li className="footer__links-item">
              <a href="" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a href="" className="footer__link github__link">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
