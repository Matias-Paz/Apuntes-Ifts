import iconLogic from "/icon-logic.png";
import iconCoding from "/icon-coding.png";
import iconMath from "/icon-math.png";
import iconBase from "/icon-base.png";
import ClassToday from "../ClassToday/ClassToday";

const dayDefault = <h4>No hay clases</h4>;
const classesByDay = {
  0: <h4>Hoy es feriado, no hay clases</h4>,
  1: (
    <>
      <div className="timetable__content">
        <div className="timetable__title">
          <h4>Encuentros de clases de hoy:</h4>
        </div>
        <div className="timetable__classesToday">
          <ClassToday
            img={iconBase}
            alt="icono de base de datos"
            title="Administración de Base de Datos"
            teacher="Gustavo Virtos"
            horary="18:30hs a 19:50hs"
            href="https://meet.google.com/oft-pxho-yhf"
          />
          <ClassToday
            img={iconCoding}
            alt="icono de programación"
            title="Tecnicas en Programación"
            teacher="Fernando Melissani"
            horary="20:00hs a 22:00hs"
            href="https://meet.google.com/dnm-ydpe-jeg"
          />
        </div>
      </div>
    </>
  ),
  2: (
    <div className="timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconLogic}
        alt="icono de lógica computacional"
        title="Lógica Computacional"
        teacher="María Alicia Piñeiro"
        horary="18:30hs a 22:hs"
        href="https://meet.google.com/owt-nbeo-nid"
      />
    </div>
  ),
  3: (
    <div className="timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconBase}
        alt="icono de base de datos"
        title="Administración de Base de Datos"
        teacher="Gustavo Virtos"
        horary="18:30hs a 22:00hs"
        href="https://meet.google.com/oft-pxho-yhf"
      />
    </div>
  ),
  4: (
    <div className="timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconMath}
        alt="icono de lógica computacional"
        title="Elementos de Análisis Matemático"
        teacher="Graciela Medici"
        horary="18:00hs a 22:00hs"
        href="https://meet.google.com/wxo-rrfm-rmz"
      />
    </div>
  ),
  5: (
    <div className=" timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconCoding}
        alt="icono de programación"
        title="Tecnicas en Programación"
        teacher="Fernando Melissani"
        horary="18:30hs a 22:00hs"
        href="https://meet.google.com/dnm-ydpe-jeg"
      />
    </div>
  ),
  6: <h4>Hoy es fin de semana, no hay clases</h4>,
  7: <h4>Hoy es fin de semana, no hay clases</h4>,
};

const ClassSchedule = ({ dayOfWeek }) => {
  const today = classesByDay[dayOfWeek] || dayDefault;

  return (
    <div className="timetable__subtitle timetable__subtitle--primary">
      {today}
    </div>
  );
};

export default ClassSchedule;
