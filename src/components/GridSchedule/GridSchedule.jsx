import "./GridSchedule.css";

const GridSchedule = ({ dayOfWeek }) => {
  return (
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
            <h4>Administración de Base de Datos</h4>
            <p>Gustavo Virtos</p>
          </div>
          <div>
            <h4>Tecnicas en Programación</h4>
            <p>Fernando Melissani</p>
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
            <h4>Lógica Computacional</h4>
            <p>María Alicia Piñeiro</p>
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
            <h4>Administración de Base de Datos</h4>
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
            <h4>Elementos de Análisis Matemático</h4>
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
            <h4>Tecnicas en Programación</h4>
            <p>Fernando Melissani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSchedule;
