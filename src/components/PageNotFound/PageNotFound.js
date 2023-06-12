import './PageNotFound.css'

function PageNotFound() {
  return (
    <main className="page-not-found app__page-not-found">
      <div className="page-not-found__error-wrapper">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__descr">Страница не найдена</p>
      </div>
      <a href="#" className="page-not-found__link">Назад</a>
    </main>
  );
}

export default PageNotFound;
