import './Tooltip.css';

function Tooltip(props) {
  return (
    <section
      className={`tooltip ${props.isTooltipActive ? 'tooltip_opened' : ''}`}
      onMouseDown={props.handleOverlay}>
      <div className="tooltip__container">
        <img src={props.image} className="tooltip__image" alt="Иконка состояния запроса запроса"/>
        <h2 className="tooltip__title">
          {props.description}
        </h2>
        <button onClick={props.onClose} className="tooltip__close" type="button"/>
      </div>
    </section>
  );
}

export default Tooltip;

