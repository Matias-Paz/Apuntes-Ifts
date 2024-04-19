import Slider from "../Slider/Slider.jsx";
import { cardsBase, cardsCoding, cardsLogic, cardsMath } from "./cardsInfo.js";
import iconLogic from "/icon-logic.png";
import iconCoding from "/icon-coding.png";
import iconMath from "/icon-math.png";
import iconBase from "/icon-base.png";
import "./Notes.css";

const Notes = () => {
  return (
    <>
      <section className="cards container" id="notes">
        <h3 className="title">Apuntes de clases</h3>

        <Slider
          img={iconBase}
          alt="icono de base de datos"
          title="Administración de Base de Datos"
          cards={cardsBase}
          id={"sliderDataBase"}
        />

        <Slider
          img={iconCoding}
          alt="icono de programación"
          title="Tecnicas en Programación"
          cards={cardsCoding}
        />

        <Slider
          img={iconLogic}
          alt="icono de lógica computacional"
          title="Lógica Computacional"
          cards={cardsLogic}
          id={"sliderLogic"}
        />

        <Slider
          img={iconMath}
          alt="icono de matematica"
          title="Elementos de Análisis Matemático"
          cards={cardsMath}
          id={"sliderMath"}
        />

        <div className="virtualClassroom">
          <a
            href="https://aulasvirtuales.bue.edu.ar/"
            target="_blank"
            rel="noreferrer noopener"
            className="virtualClass__item"
          >
            Aula Virtual
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </a>
          <a
            href="https://guarani-autogestionagencia.bue.edu.ar/"
            target="_blank"
            rel="noreferrer noopener"
            className="virtualClass__item"
          >
            SIU Guaraní
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </a>
          <a
            href="https://ifts4buenosaires.blogspot.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="virtualClass__item"
          >
            Web Oficial del IFTS N°4
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </a>
        </div>
        <a
          className="cards__link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://drive.google.com/file/d/1o6EZkwciTGd9eoA6YRB1aYxM3SJYxtld/view"
        >
          Si necesitas el plan de estudio de Desarrollo de Software, simplemente{" "}
          <span className="cards__link--underline">
            haz clic aquí para obtenerlo
          </span>
        </a>
      </section>
    </>
  );
};

export default Notes;
