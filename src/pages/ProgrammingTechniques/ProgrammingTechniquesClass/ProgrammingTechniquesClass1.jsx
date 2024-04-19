const ProgrammingTechniquesClass1 = () => {
  return (
    <>
      <section className="classSubjects" id="topics">
        <div className="container">
          <h3 className="title">Presentacion y reglas</h3>
          <p className="classSubjects__subtitle">
            Profesor: Fernando Melissani
          </p>
        </div>
      </section>
      <section className="classSubjects__section section">
        <h4 className="title">Apuntes</h4>
        <div className="classSubjects__subsection" id="tema1">
          <h5>Regla del curso</h5>
          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">Horario:</span>{" "}
            Lunes, alrededor de las 20:00 a las 22:00 horas, después de
            Administración de Bases de Datos, y Viernes de 18:00 a 22:10 horas.
            Cuando la clase es presencial, se iniciará a las 18:30 horas los
            Viernes.
          </p>

          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">
              Correo del profesor:
            </span>{" "}
            <a href="mailto:pablo.melissani@bue.edu.ar">
              pablo.melissani@bue.edu.ar
            </a>
          </p>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--color">
              <p>
                <span className="classSubjects__paragraph--bold">
                  Dos examenes
                </span>{" "}
                (y un examen final en caso de regularizar) y
                <span className="classSubjects__paragraph--bold">
                  {" "}
                  Un trabajo final integrador
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="classSubjects__sectionTask" id="task">
        <div className="classSubjects__container container">
          <h3 className="title">Tarea de Tecnicas en Programación</h3>
          <ul className="classSubjects__lists">
            <li>
              No hay tarea, pero se puede descargar{" "}
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="classSubjects__link"
              >
                Python
              </a>{" "}
              y un editor de código, como{" "}
              <a
                href="https://code.visualstudio.com/download"
                target="_blank"
                rel="noreferrer noopener"
                className="classSubjects__link"
              >
                {" "}
                Visual Studio Code
              </a>
              , para la próxima clase.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProgrammingTechniquesClass1;
