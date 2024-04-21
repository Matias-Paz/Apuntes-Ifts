import { useState } from "react";
import { allRecordings } from "./recordingElement.js";
import iconDate from "/icon-calendar.png";
import iconUser from "/icon-user.webp";
import iconAlert from "/icon-alert.png";
import iconExclamacion from "/icon-exclamacion.png";
import "./RecordingElement.css";
import { RECORDING } from "../../config/paths.js";

function RecordingElement() {
  const itemsPerPage = 4; // Change this value as needed
  const [currentPage, setCurrentPage] = useState(1);
  const [filterRecording, setFilterRecording] = useState(allRecordings);
  const [filter, setFilter] = useState("all");

  const handleFilter = category => {
    setFilter(category); // Set the current filter state

    const categoryMap = {
      all: null,
      logic: "logic",
      dataBase: "dataBase",
      mathematical: "mathematical",
      technique: "technique",
    };

    const classToFilter = categoryMap[category];

    if (classToFilter) {
      setFilterRecording(
        allRecordings.filter(recording => recording.subject === classToFilter)
      );
    } else {
      setFilterRecording(allRecordings);
    }

    setCurrentPage(1);
  };

  // Calculate pagination logic
  const totalItems = filterRecording.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filterRecording.slice(startIndex, endIndex);

  return (
    <section className="recordingElement container" id="recording">
      <h3 className="title">Grabaciones de clases</h3>
      <div className="recordingElement__buttons">
        <button
          onClick={() => handleFilter("all")}
          className={`recordingElement__button ${
            filter === "all" ? "recordingElement__button--active" : ""
          }`}
          //   className=
        >
          Todas las clases
        </button>
        <button
          onClick={() => handleFilter("dataBase")}
          className={`recordingElement__button ${
            filter === "dataBase" ? "recordingElement__button--active" : ""
          }`}
        >
          Administración de Base de Datos
        </button>
        <button
          onClick={() => handleFilter("logic")}
          className={`recordingElement__button ${
            filter === "logic" ? "recordingElement__button--active" : ""
          }`}
        >
          Lógica Computacional
        </button>
        <button
          onClick={() => handleFilter("technique")}
          className={`recordingElement__button ${
            filter === "technique" ? "recordingElement__button--active" : ""
          }`}
        >
          Técnicas en Programación
        </button>
        <button
          onClick={() => handleFilter("mathematical")}
          className={`recordingElement__button ${
            filter === "mathematical" ? "recordingElement__button--active" : ""
          }`}
        >
          Análisis Matemático
        </button>
      </div>
      <div className="recording__items">
        {currentItems.map((recording, index) => (
          <a
            rel="noopener noreferrer"
            target="_black"
            href={recording.link}
            key={index}
            className="recording__item"
          >
            <div className="recording__text">
              <h4>{recording.title}</h4>
              <div className="recording__date">
                <img src={iconDate} alt="icono de fecha" />{" "}
                <p>
                  <span>Fecha</span>: {recording.date}
                </p>
              </div>
              <div className="recording__date">
                <img src={iconUser} alt="icono de usuario" />{" "}
                <p>
                  <span>Profesor</span>: {recording.teacher}
                </p>
              </div>
            </div>
            <div className="recording__img-data">
              <img src={recording.img} className="recording__img" />
            </div>
          </a>
        ))}
      </div>
      <div className="recordingElement__pagination">
        <button
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
          className={` ${
            currentPage !== 1 ? "" : "recordingElement__button--disable"
          } `}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={` recordingElement__button--width ${
                currentPage === page ? "recordingElement__button--active" : ""
              }`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={() =>
            setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
          }
          className={`${
            currentPage !== totalPages
              ? ""
              : "recordingElement__button--disable"
          } `}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
      <div className="recordingElement__legend recordingElement__legend--primary recordingElement__legend--start">
        <img src={iconAlert} alt="icono de importante" />
        <p>
          Después de cada clase, estarán disponibles en YouTube entre la 1:00 hs
          y las 2:00 hs los videos nuevos. Recuerda que subimos los videos
          después de la clase, así que puede tomar un poco de tiempo. Sin
          embargo, el enlace privado estará disponible a las 0:00 hs en la web.
          Si los videos nuevos dura menos de 2 horas, YouTube lo mostrará antes.
        </p>
      </div>
      <div className="recordingElement__legend">
        <img src={iconExclamacion} alt="icono de alerta" />
        <p>
          Si encuentras algún enlace incorrecto, por favor avísanos para que
          podamos corregirlo. Todos los videos de las clases están disponibles
        </p>
      </div>
    </section>
  );
}

export default RecordingElement;
