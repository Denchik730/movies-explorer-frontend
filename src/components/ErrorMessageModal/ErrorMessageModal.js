import './ErrorMessageModal.css';

import errorImg from '../../images/popup-error.png'

function ErrorMessageModal() {
  return (
    <section className="tooltip tooltip_opened">
      <div className="tooltip__container">
        <img src={errorImg} className="tooltip__image" alt="Ошибка запроса"/>
        <h2 className="tooltip__title">
          Что-то пошло не так...
        </h2>
        <button className="tooltip__close" type="button"/>
      </div>
    </section>
  );
}

export default ErrorMessageModal;

