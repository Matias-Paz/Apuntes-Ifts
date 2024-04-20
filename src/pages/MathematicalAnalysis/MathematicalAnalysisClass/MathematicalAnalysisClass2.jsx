import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import ModalClass from "../../../components/ModalClass/ModalClass.jsx";
import Dropdowns from "../../../components/Dropdowns/Dropdowns";
import errorPrimary from "/primer-errores-clase2.webp";
import errorSecondary from "/segundo-errores-clase2.webp";
import errorTernary from "/tercer-errores-clase2.webp";
import temaSeguros from "/temas-seguros-clase2.webp";
import imgVideo from "/video-matematica.webp";
import iconPdf from "/icon-pdf.png";
import { useState } from "react";

const dropdownsMathematicalClass2 = [
  { title: "Tareas y respuestas", id: "tema1" },
  { title: "Errores comunes que se repiten en los exámenes", id: "tema2" },
  { title: "Temas que aseguro que toma", id: "tema3" },
];

const MathematicalAnalysisClass2 = ({ numericId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const linkPrimary = "https://www.youtube.com/watch?v=oaoG3J8P7XI";
  const linkSecondary = "https://www.youtube.com/watch?v=Qz6sisPGdcE";

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Repaso de la tarea anterior</h3>
          <p className="classSubjects__subtitle">Profesora: Graciela Medici</p>
        </div>
      </section>
      <YoutubeRecording
        urlPrimary={linkPrimary}
        urlSecondary={linkSecondary}
        imgVideoPrimary={imgVideo}
        imgVideoSecondary={imgVideo}
        text={`Por favor, les solicitamos discreción al ver el video y evitar compartirlo.`}
      />
      <section className="classSubjects__section section" id="topics">
        <h4 className="title">Apuntes</h4>
        <Dropdowns links={dropdownsMathematicalClass2} page={numericId} />

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass2[0].id}
        >
          <h5>{dropdownsMathematicalClass2[0].title}</h5>
          <ul className="classSubjects__lists">
            <li>
              <span
                className="classSubjects__flex classSubjects__flex--wrap"
                style={{ alignItems: "center" }}
              >
                Tareas con respuestas correjidas:
                <a
                  href="https://drive.google.com/file/d/1W9Vt7i3gjWi-YickauN0OhNKaKZ-myLA/view?usp=sharing"
                  className="classSubjects__listItem"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img loading="lazy" src={iconPdf} alt="icono de pdf" />
                  <p className="classSubjects__paragraph">
                    Tareas de 40 actividades de V o F
                  </p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1oC506j58xvvx3wUD4Avt_d8TRMyVTLeI/view?usp=sharing"
                  className="classSubjects__listItem"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img loading="lazy" src={iconPdf} alt="icono de pdf" />
                  <p className="classSubjects__paragraph">
                    Tareas de 36 actividades de V o F
                  </p>
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass2[1].id}
        >
          <h5>{dropdownsMathematicalClass2[1].title}</h5>
          {/* <p className="classSubjects__grid--color">hola</p> */}
          <div className="classSubjects__grids">
            <img
              loading="lazy"
              src={errorPrimary}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width "
              onClick={() => openModal(errorPrimary)}
            />
            <img
              loading="lazy"
              src={errorSecondary}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width "
              onClick={() => openModal(errorSecondary)}
            />
            <img
              loading="lazy"
              src={errorTernary}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width "
              onClick={() => openModal(errorTernary)}
            />
          </div>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass2[2].id}
        >
          <h5>{dropdownsMathematicalClass2[2].title}</h5>
          <img
            loading="lazy"
            src={temaSeguros}
            alt="cuadro de operacion de adicción"
            className="classSubjects__img"
            onClick={() => openModal(temaSeguros)}
          />
        </div>
      </section>
      <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} />
    </>
  );
};

export default MathematicalAnalysisClass2;
