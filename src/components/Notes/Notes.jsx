import iconLogic from "/icon-logic.png";
import iconCoding from "/icon-coding.png";
import iconMath from "/icon-math.png";
import iconBase from "/icon-base.png";
import iconObjectDevelopment from "/icon-objectDevelopment.webp";
import iconModelling from "/icon-modelling.webp";
import "./Notes.css";
import { DATABASE, LOGIC, MATH, TECHNIQUE } from "../../config/paths";

const Notes = () => {
  return (
    <section className="notes container" id="notes">
      <h3 className="title">Apuntes de clases de IFTS N°4</h3>

      <div className="notesClassroom">
        <div className="notesClassroom__item notesClassroom__item--primary">
          <div className="notesClassroom__paragraphs">
            <p>¡Bienvenido! 🎉</p>
            <p>
              En este sitio encontrarás apuntes gratuitos sobre la carrera de
              Técnico en Desarrollo de Software
            </p>
            <p>¡Todo el material está a tu disposición sin costo alguno! </p>
          </div>
        </div>
      </div>

      <div className="notesCards">
        <div className="notesCards__title">
          <h4 className="title">Materias de clases</h4>
        </div>
        <div
          href="https://aulasvirtuales.bue.edu.ar/"
          target="_blank"
          rel="noreferrer noopener"
          className="notesCard"
        >
          <h4>Base de Datos</h4>
          <picture className="notesCard__picture">
            <img
              loading="lazy"
              className="notesCard__img"
              src={iconBase}
              alt="icono de base datos"
            />
          </picture>
          <a
            className="notesCard__link"
            href={`${import.meta.env.VITE_API}${DATABASE}`}
          >
            Ver ahora
          </a>
        </div>
        <div target="_blank" rel="noreferrer noopener" className="notesCard">
          <h4>Tecnicas de Programación</h4>
          <picture className="notesCard__picture">
            <img
              loading="lazy"
              className="notesCard__img"
              src={iconCoding}
              alt="icono de Tecnica"
            />
          </picture>
          <a
            className="notesCard__link"
            href={`${import.meta.env.VITE_API}${TECHNIQUE}`}
          >
            Ver ahora
          </a>
        </div>
        <div target="_blank" rel="noreferrer noopener" className="notesCard">
          <h4>Lógica Computacional</h4>
          <picture className="notesCard__picture">
            <img
              loading="lazy"
              className="notesCard__img"
              src={iconLogic}
              alt="icono de Tecnica"
            />
          </picture>
          <a
            className="notesCard__link"
            href={`${import.meta.env.VITE_API}${LOGIC}`}
          >
            Ver ahora
          </a>
        </div>
        <div target="_blank" rel="noreferrer noopener" className="notesCard">
          <h4>Análisis Matemático</h4>
          <picture className="notesCard__picture">
            <img
              loading="lazy"
              className="notesCard__img"
              src={iconMath}
              alt=""
            />
          </picture>
          <a
            className="notesCard__link"
            href={`${import.meta.env.VITE_API}${MATH}`}
          >
            Ver ahora
          </a>
        </div>
        <div target="_blank" rel="noreferrer noopener" className="notesCard">
          <h4>Desarrollo orientado a objetos</h4>
          <picture className="notesCard__picture notesCard__picture--width">
            <img
              loading="lazy"
              className="notesCard__img"
              src={iconObjectDevelopment}
              alt=""
            />
          </picture>
          <a
            className="notesCard__link notesCard__link--disable"
            href={`${import.meta.env.VITE_API}${MATH}`}
          >
            Proximamente
          </a>
        </div>
        <div target="_blank" rel="noreferrer noopener" className="notesCard">
          <h4>Modelado y desarrollo de software</h4>
          <picture className="notesCard__picture">
            <img
              loading="lazy"
              className="notesCard__img"
              src={iconModelling}
              alt=""
            />
          </picture>
          <a
            className="notesCard__link notesCard__link--disable"
            href={`${import.meta.env.VITE_API}${MATH}`}
          >
            Proximamente
          </a>
        </div>
      </div>
      <div className="notesClassroom">
        <a
          href="https://aulasvirtuales.bue.edu.ar/"
          target="_blank"
          rel="noreferrer noopener"
          className="notesClassroom__item "
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
          className="notesClassroom__item"
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
          className="notesClassroom__item"
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
        className="notes__link"
        target="_blank"
        rel="noreferrer noopener"
        href="https://drive.google.com/file/d/1o6EZkwciTGd9eoA6YRB1aYxM3SJYxtld/view"
      >
        Si necesitas el plan de estudio de Desarrollo de Software, simplemente{" "}
        <span className="notes__link--underline">
          haz clic aquí para obtenerlo
        </span>
      </a>
    </section>
  );
};

export default Notes;

{
  /*
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

<div className="notesClassroom">
  <a
    href="https://aulasvirtuales.bue.edu.ar/"
    target="_blank"
    rel="noreferrer noopener"
    className="notesClassroom__item"
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
    className="notesClassroom__item"
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
    className="notesClassroom__item"
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
</section> */
}
