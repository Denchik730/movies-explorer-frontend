import './ErrorMessageModal.css';

import errorImg from '../../images/popup-error.png'

function ErrorMessageModal(props) {
  return (
    <section className={`tooltip ${props.isOpen ? 'tooltip_opened' : ''}`}>
      <div className="tooltip__container">
        <img src={errorImg} className="tooltip__image" alt="Ошибка запроса"/>
        <h2 className="tooltip__title">
          Что-то пошло не так...
        </h2>
        <button onClick={props.onClose} className="tooltip__close" type="button"/>
      </div>
    </section>
  );
}

export default ErrorMessageModal;

