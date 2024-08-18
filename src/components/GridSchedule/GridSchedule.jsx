import "./GridSchedule.css";

const GridSchedule = ({ dayOfWeek }) => {
  return (
    <>
      <div className="gridSchedule">
        <div>
          <div className="gridSchedule__title">Hora</div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title">Lunes</div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 1 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Administración de base de datos</h4>
              <p>Luis Pérez</p>
            </div>
            <div>
              <h4>Tecnicas en programación</h4>
              <p>Luis Pérez</p>
            </div>
          </div>
        </div>

        <div className="gridSchedule__hour--mobile">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderMobile">
            Martes
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 2 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Lógica computacional</h4>
              <p>Cristina Ferro Croce</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderTable">
            Miercoles
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 3 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Administración de base de datos</h4>
              <p>Luis Pérez</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--mobile gridSchedule__hour--mobileTable">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Jueves
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 4 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Elementos de análisis matemático</h4>
              <p>Graciela Medici</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Viernes
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 5 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Tecnicas en programación</h4>
              <p>Luis Pérez</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gridSchedule">
        <div>
          <div className="gridSchedule__title">Hora</div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title">Lunes</div>
          <div
            className={`gridSchedule__subject ${
              dayOfWeek === 1 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Desarrollo de sistemas orientado a objetos</h4>
              <p>Ingrid García</p>
            </div>
          </div>
        </div>

        <div className="gridSchedule__hour--mobile">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderMobile">
            Martes
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 2 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Estadística y probabilidades</h4>
              <p>Graciela Medici</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderTable">
            Miercoles
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 3 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Práctica profesional I</h4>
              <p>Virginia Polcan</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--mobile gridSchedule__hour--mobileTable">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Jueves
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 4 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Inglés</h4>
              <p>Andrea Mackewitz</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Viernes
          </div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 5 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Modelado y desarrollo de software</h4>
              <p>M. del Carmen Acri</p>
            </div>
            <div>
              <h4>Desarollo de sistemas orientado a objetos</h4>
              <p>Ingrid García</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gridSchedule">
        <div>
          <div className="gridSchedule__title">Hora</div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title">Lunes</div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 1 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Desarrollo de aplicaciones</h4>
              <p>Agustín Falcón</p>
            </div>
            <div>
              <h4>Metodología de prueba de sistemas</h4>
              <p>Gonzalo Bonetti</p>
            </div>
          </div>
        </div>

        <div className="gridSchedule__hour--mobile">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderMobile">
            Martes
          </div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 2 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>TICS</h4>
              <p>Matías Torres</p>
            </div>
            <div>
              <h4>Taller de comunicación</h4>
              <p>Sofía Mareque</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderTable">
            Miercoles
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 3 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Práctica profesional II </h4>
              <p>Gustavo Virtos</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--mobile gridSchedule__hour--mobileTable">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Jueves
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 4 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Metodología de prueba de sistemas</h4>
              <p>Gonzalo Bonetti</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Viernes
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 5 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Desarrollo de aplicaciones</h4>
              <p>Agustín Falcón</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gridSchedule">
        <div>
          <div className="gridSchedule__title">Hora</div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title">Lunes</div>
          <div
            className={`gridSchedule__subject ${
              dayOfWeek === 1 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Desarrollo de sistemas web (Back end)</h4>
              <p>María del Carmen Acri</p>
            </div>
          </div>
        </div>

        <div className="gridSchedule__hour--mobile">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderMobile">
            Martes
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 2 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Ingeniería de software</h4>
              <p>Alan García</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderTable">
            Miercoles
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 3 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Práctica profesional III</h4>
              <p>María del Carmen Acri</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--mobile gridSchedule__hour--mobileTable">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Jueves
          </div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 4 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Desarrollo de sistemas web (Front End)</h4>
              <p>María del Carmen Acri</p>
            </div>
            <div>
              <h4>Desarrollo de sistemas web (Back end)</h4>
              <p>María del Carmen Acri</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Viernes
          </div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 5 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Ingeniería de software</h4>
              <p>Alan García</p>
            </div>
            <div>
              <h4>Práctica profesional III</h4>
              <p>María del Carmen Acri</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gridSchedule">
        <div>
          <div className="gridSchedule__title">Hora</div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title">Lunes</div>
          <div
            className={`gridSchedule__subject ${
              dayOfWeek === 1 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Gestión de proyectos</h4>
              <p>Paula Pérez Willis</p>
            </div>
          </div>
        </div>

        <div className="gridSchedule__hour--mobile">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderMobile">
            Martes
          </div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 2 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Programación sobre redes</h4>
              <p>Javier Blanco</p>
            </div>
            <div>
              <h4>Seminario de actualización y profundización</h4>
              <p>Fernando Melissari</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border gridSchedule__title--borderTable">
            Miercoles
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 3 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Práctica profesional VI</h4>
              <p>Alan García</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--mobile gridSchedule__hour--mobileTable">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>
        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Jueves
          </div>
          <div
            className={`gridSchedule__subject
        ${dayOfWeek === 4 ? "gridSchedule__subject--color" : ""}`}
          >
            <div>
              <h4>Programación sobre redes</h4>
              <p>Javier Blanco</p>
            </div>
          </div>
        </div>
        <div className="gridSchedule__hour--table">
          <div className="gridSchedule__title gridSchedule__title--border">
            Hora
          </div>
          <div className="gridSchedule__time">
            <div>18:00</div>
            <div>19:00</div>
            <div>19:50</div>
            <div>20:00</div>
            <div>21:00</div>
            <div>22:00</div>
          </div>
        </div>

        <div className="gridSchedule__days">
          <div className="gridSchedule__title gridSchedule__title--border">
            Viernes
          </div>
          <div
            className={`gridSchedule__subject gridSchedule__subject--primary ${
              dayOfWeek === 5 ? "gridSchedule__subject--color" : ""
            }`}
          >
            <div>
              <h4>Trabajo, tecnología y sociedad</h4>
              <p>Hernán Cuñarro</p>
            </div>
            <div>
              <h4>Práctica profesional IV </h4>
              <p>Alan García</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridSchedule;
