import { useState } from "react";
import mapPrimary from "/map.webp";
import mapSecondary from "/correlatividades.webp";
import "./SubjectMap.css";

const SubjectMap = () => {
  const [section, setsection] = useState("section1");

  const handleButtonClick = sectionId => {
    setsection(sectionId);
  };

  return (
    <section className="subjectMap container">
      <div className="subjectMap__title">
        <h3 className="title">Correlatividades de materias</h3>
        <div className="subjectMap__buttons">
          <button
            className={` ${
              section === "section1" ? "subjectMap__button--active" : ""
            }`}
            onClick={() => handleButtonClick("section1")}
          >
            Mapa
          </button>
          <button
            className={` ${
              section === "section2" ? "subjectMap__button--active" : ""
            }`}
            onClick={() => handleButtonClick("section2")}
          >
            Texto
          </button>
        </div>
      </div>

      <div
        className={`subjectMap__section ${
          section !== "section1" ? "subjectMap__section--disable" : ""
        }`}
      >
        <div className="subjectMap__subtitle">
          <h4>Mapa de materias</h4>
          <a
            href="https://drive.google.com/file/d/1ix5k3SgzZTwhXbEUs-sORltylmKNJRxm/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver en línea
          </a>
        </div>
        <img src={mapPrimary} alt="mapa de materias" />
      </div>

      <div
        className={`subjectMap__section ${
          section !== "section2" ? "subjectMap__section--disable" : ""
        }`}
      >
        <div className="subjectMap__subtitle">
          <h4 className="title">Plan de correlatividades</h4>
          <a
            href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibWge3sZHgTGH3-t3DjgFZwwvGa9fBlJQsEIKW2Asy2-SKgfY_RgP-mPh2-zStjGWc-j9J1KlLoBR1oqM-uSd_cGuyjS6tEwwM5RaAQgLgOIdJwGNenNkyufJ2wpOS8HYbHNM1dRbFFdpsBAaJHYnElohGJcL90p4mkow3wuQUbDWdweJQIkXMFQvK/s998/correlatividades_desarrollo.jpg"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver en línea
          </a>
        </div>
        <img src={mapSecondary} alt="plan de materias" />
      </div>
    </section>
  );
};

export default SubjectMap;
