import GridSchedule from "../GridSchedule/GridSchedule";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "./TimetableText.css";

const TimetableText = () => {
  dayjs.locale("es");
  const today = dayjs();
  const dayOfWeek = today.day();
  const dayNumber = today.format("D");
  const dayName = today.format("dddd");
  const monthName = today.format("MMMM");
  const year = today.format("YYYY");

  return (
    <section className="timetable" id="timetable">
      <div className="timetable__container container">
        <h3 className="title">Horarios de clases</h3>
        <div className="timetable__date">
          <h4>Fecha de hoy:</h4>
          <p>
            <span className="timetable__paragraph--capitalize">{dayName}</span>
            ,&nbsp;
            {dayNumber} de{" "}
            <span className="timetable__paragraph--capitalize">
              {monthName}
            </span>{" "}
            de <span className="timetable__paragraph--capitalize">{year}</span>
          </p>
        </div>
        <ClassSchedule dayOfWeek={dayOfWeek} />

        <GridSchedule dayOfWeek={dayOfWeek} />
        {dayOfWeek !== 6 && dayOfWeek !== 7 && dayOfWeek !== 0 && (
          <p style={{ marginBottom: ".8rem" }}>
            Cuando las clases son presenciales, se concluyen antes de las 22:00
            hs debido a consideraciones de seguridad y cerrar el predio.
          </p>
        )}
        <a
          className="notes__link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://docs.google.com/spreadsheets/d/1ZZzolUI2P4QyMgDQL25bc5_GqMn5e1z6/edit?gid=2076467786#gid=2076467786"
        >
          Si necesitas el horario del cuatrimestre completo de Desarrollo de
          Software, simplemente{" "}
          <span className="notes__link--underline">
            haz clic aquí para obtenerlo
          </span>
        </a>
      </div>
    </section>
  );
};

export default TimetableText;
