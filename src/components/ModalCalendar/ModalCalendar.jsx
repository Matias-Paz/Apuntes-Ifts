import "./ModalCalendar.css";
import dayjs from "dayjs";

const ModalCalendar = ({ active, event, onClose }) => {
  const formattedDateEnd = event?.end
    ? dayjs(event.end).format("DD/MM/YYYY")
    : null;

  const formattedDateStart = event?.start
    ? dayjs(event.start).format("DD/MM/YYYY")
    : null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`modalCalendar ${!active ? "modalCalendar--opacity" : ""}`}
      onClick={handleClose}
    >
      <div className="modalCalendar__container">
        {event?.title && <h2>{event?.title}</h2>}
        {formattedDateStart && (
          <p>
            <span className="modalCalendar__title">Fecha del evento:</span>{" "}
            {formattedDateStart}
            {!event?.teacher && <span> -&nbsp;{formattedDateEnd}</span>}
          </p>
        )}
        {event?.teacher && (
          <p>
            <span className="modalCalendar__title">Profesor/a:</span>{" "}
            {event.teacher}
          </p>
        )}
        {event?.description && (
          <p>
            <span className="modalCalendar__title">Descripción:</span>{" "}
            {event.description}
          </p>
        )}
        <button>x</button>{" "}
      </div>
    </div>
  );
};

export default ModalCalendar;
