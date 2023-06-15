import './PageNotFound.css';

import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className="page-not-found app__page-not-found">
      <div className="page-not-found__error-wrapper">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__descr">Страница не найдена</p>
      </div>
      <Link to="/" className="page-not-found__link">Назад</Link>
    </main>
  );
}

export default PageNotFound;
