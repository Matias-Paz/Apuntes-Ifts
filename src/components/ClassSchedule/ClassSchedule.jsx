import iconLogic from "/icon-logic.png";
import iconCoding from "/icon-coding.png";
import iconMath from "/icon-math.png";
import iconBase from "/icon-base.png";
import iconObjectDevelopment from "/icon-objectDevelopment.webp";
import iconApplicationDevelopment from "/icon-application-development.webp";
import iconTesting from "/icon-testing.png";
import iconBackend from "/icon-backend.webp";
import iconProyect from "/icon-proyect.png";
import iconStatistics from "/icon-statistics.png";
import iconTechnology from "/icon-technology.png";
import iconCommunication from "/icon-communication.png";
import iconSoftwareEngineering from "/icon-software-engineering.webp";
import iconGlobal from "/icon-global.webp";
import iconChanges from "/icon-changes.png";
import iconProfessionalPractice from "/icon-professional-practice.webp";
import iconTranslator from "/icon-translator.png";
import iconFrontend from "/icon-frontend.png";
import iconModelling from "/icon-modelling.webp";
import iconNanotechnology from "/icon-nanotechnology.webp";
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
            title="Administración de base de datos"
            teacher="Luis Pérez"
            horary="18:00hs a 19:50hs"
            // href="https://meet.google.com/oft-pxho-yhf"
          />
          <ClassToday
            img={iconCoding}
            alt="icono de programación"
            title="Tecnicas en programación"
            teacher="Luis Pérez"
            horary="20:00hs a 22:00hs"
            // href="https://meet.google.com/dnm-ydpe-jeg"
          />
          <ClassToday
            img={iconObjectDevelopment}
            alt="icono de sistemas orientado a objetos"
            title="Desarrollo de sistemas orientado a objetos"
            teacher="Ingrid García"
            horary="18:00hs a 22:00hs"
            // href="https://meet.google.com/dnm-ydpe-jeg"
          />
          <ClassToday
            img={iconApplicationDevelopment}
            alt="icono de desarrollo de aplicaciones para dispositivos móviles"
            title="Desarrollo de aplicaciones"
            teacher="Agustín Falcón"
            horary="18:00hs a 19:50hs"
            // href="https://meet.google.com/dnm-ydpe-jeg"
          />
          <ClassToday
            img={iconTesting}
            alt="icono de metodología de prueba de sistemas"
            title="Metodología de prueba de sistemas"
            teacher="Gonzalo Bonetti"
            horary="19:50hs a 22:00hs"
            // href="https://meet.google.com/dnm-ydpe-jeg"
          />
          <ClassToday
            img={iconBackend}
            alt="icono de metodología de desarrollo de sistemas web (Back end)"
            title="Desarrollo de sistemas web (Back end)"
            teacher="María del Carmen Acri"
            horary="18:00hs a 22:00hs"
            // href="https://meet.google.com/dnm-ydpe-jeg"
          />
          <ClassToday
            img={iconProyect}
            alt="icono de metodología de gestión de proyectos"
            title="Gestión de proyectos"
            teacher="Paula Pérez Willis"
            horary="18:00hs a 22:00hs"
            // href="https://meet.google.com/dnm-ydpe-jeg"
          />
        </div>
      </div>
    </>
  ),
  2: (
    <>
      <div className="timetable__content">
        <h4>Encuentro de clase de hoy:</h4>
        <ClassToday
          img={iconLogic}
          alt="icono de lógica computacional"
          title="Lógica computacional"
          teacher="Cristina Ferro Croce"
          horary="18:00hs a 22:00hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
        <ClassToday
          img={iconStatistics}
          alt="icono de estadística y probabilidades"
          title="Estadística y probabilidades"
          teacher="Graciela Medici"
          horary="18:00hs a 22:00hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
        <ClassToday
          img={iconTechnology}
          alt="icono de estadística y probabilidades"
          title="TICS"
          teacher="Matías Torres"
          horary="18:00hs a 19:50hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
        <ClassToday
          img={iconCommunication}
          alt="icono de taller de comunicación"
          title="Taller de comunicación"
          teacher="Sofía Mareque"
          horary="20:00hs a 22:00hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
        <ClassToday
          img={iconSoftwareEngineering}
          alt="icono de ingeniería de software"
          title="Ingeniería de software"
          teacher="Alan García"
          horary="18:00hs a 22:00hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
        <ClassToday
          img={iconGlobal}
          alt="icono de programación sobre redes"
          title="Programación sobre redes"
          teacher="Javier Blanco"
          horary="18:00hs a 19:50hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
        <ClassToday
          img={iconChanges}
          alt="icono de seminario de actualización y profundización"
          title="Seminario de actualización y profundización"
          teacher="Fernando Melissari"
          horary="20:00hs a 22:00hs"
          // href="https://meet.google.com/owt-nbeo-nid"
        />
      </div>
    </>
  ),
  3: (
    <div className="timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconBase}
        alt="icono de base de datos"
        title="Administración de base de datos"
        teacher="Luis Pérez"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
      <ClassToday
        img={iconProfessionalPractice}
        alt="icono de práctica profesional I"
        title="Práctica profesional I"
        teacher="Virginia Polcan"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
      <ClassToday
        img={iconProfessionalPractice}
        alt="icono de práctica profesional II"
        title="Práctica profesional II"
        teacher="Gustavo Virtos"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
      <ClassToday
        img={iconProfessionalPractice}
        alt="icono de práctica profesional III"
        title="Práctica profesional III"
        teacher="María del Carmen Acri"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
      <ClassToday
        img={iconProfessionalPractice}
        alt="icono de práctica profesional IV"
        title="Práctica profesional IV"
        teacher="Alan García"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
    </div>
  ),
  4: (
    <div className="timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconMath}
        alt="icono de lógica computacional"
        title="Elementos de análisis matemático"
        teacher="Graciela Medici"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/wxo-rrfm-rmz"
      />
      <ClassToday
        img={iconTranslator}
        alt="icono de ingles"
        title="Inglés"
        teacher="Andrea Mackewitz"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/wxo-rrfm-rmz"
      />
      <ClassToday
        img={iconTesting}
        alt="icono de metodología de prueba de sistemas"
        title="Metodología de prueba de sistemas"
        teacher="Gonzalo Bonetti"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconFrontend}
        alt="icono de metodología de desarrollo de sistemas web (Front End)"
        title="Desarrollo de sistemas web (Front End)"
        teacher="María del Carmen Acri"
        horary="18:00hs a 19:50hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconBackend}
        alt="icono de metodología de desarrollo de sistemas web (Back end)"
        title="Desarrollo de sistemas web (Back end)"
        teacher="María del Carmen Acri"
        horary="20:00hs a 22:00hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconGlobal}
        alt="icono de programación sobre redes"
        title="Programación sobre redes"
        teacher="Javier Blanco"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/owt-nbeo-nid"
      />
    </div>
  ),
  5: (
    <div className=" timetable__content">
      <h4>Encuentro de clase de hoy:</h4>
      <ClassToday
        img={iconCoding}
        alt="icono de programación"
        title="Tecnicas en programación"
        teacher="Luis Pérez"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconModelling}
        alt="icono de programación"
        title="Modelado y desarrollo de software"
        teacher="M. del Carmen Acri"
        horary="18:00hs a 19:50hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconObjectDevelopment}
        alt="icono de sistemas orientado a objetos"
        title="Desarrollo de sistemas orientado a objetos"
        teacher="Ingrid García"
        horary="20:00hs a 22:00hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconApplicationDevelopment}
        alt="icono de desarrollo de aplicaciones para dispositivos móviles"
        title="Desarrollo de aplicaciones"
        teacher="Agustín Falcón"
        horary="18:00hs a 22:00hs"
        // href="https://meet.google.com/dnm-ydpe-jeg"
      />
      <ClassToday
        img={iconSoftwareEngineering}
        alt="icono de ingeniería de software"
        title="Ingeniería de software"
        teacher="Alan García"
        horary="18:00hs a 19:50hs"
        // href="https://meet.google.com/owt-nbeo-nid"
      />
      <ClassToday
        img={iconProfessionalPractice}
        alt="icono de práctica profesional III"
        title="Práctica profesional III"
        teacher="María del Carmen Acri"
        horary="20:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
      <ClassToday
        img={iconNanotechnology}
        alt="icono de trabajo, tecnología y sociedad"
        title="Trabajo, tecnología y sociedad"
        teacher="Hernán Cuñarro"
        horary="18:00hs a 19:50hs"
        // href="https://meet.google.com/oft-pxho-yhf"
      />
      <ClassToday
        img={iconProfessionalPractice}
        alt="icono de práctica profesional IV"
        title="Práctica profesional IV"
        teacher="Alan García"
        horary="20:00hs a 22:00hs"
        // href="https://meet.google.com/oft-pxho-yhf"
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
