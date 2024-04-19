import { useState } from "react";
import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import Dropdowns from "../../../components/Dropdowns/Dropdowns";
import Quiz from "../../../components/Quiz/Quiz";
import ModalClass from "../../../components/ModalClass/ModalClass";
import functionPrint from "/function-print.webp";
import argumentsFunctions from "/arguments-functions.webp";
import functionInvocation from "/function-invocation.webp";
import escapeCharacters from "/escape-characters.webp";
import escapeCharacter from "/escape-character.webp";
import multipleArguments from "/multiple-arguments.webp";
import arguments1 from "/arguments-1.webp";
import arguments2 from "/arguments-2.webp";
import arguments3 from "/arguments-3.webp";
import arguments4 from "/arguments-4.webp";
import arguments5 from "/arguments-5.webp";
import imgVideo from "/video-tecnica.webp";

const dropdownsProgrammingTechniquesClass3 = [
  { title: "La función print()", id: "tema1" },
  { title: "Argumentos de funciones", id: "tema2" },
  { title: "Invocación de funciones", id: "tema3" },
  { title: "Caracteres de escape y nueva línea en Python", id: "tema4" },
  { title: "Usando múltiples argumentos", id: "tema5" },
  { title: "Argumentos posicionales y palabras claves", id: "tema6" },
];

const ProgrammingTechniquesClass3 = ({ numericId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const link = "https://www.youtube.com/watch?v=496qc6IA7qo&feature=youtu.be";

  return (
    <>
      <section className="classSubjects">
        <div className="classSubjects__quiz container">
          <div>
            <h3 className="title">Funcion Print() de Python</h3>
            <p className="classSubjects__subtitle">
              Profesor: Fernando Melissani
            </p>
          </div>
          <Quiz
            text={"Quiz calificatorio"}
            href={"https://quizzifts.netlify.app/tecnica3"}
          />
        </div>
        <YoutubeRecording
          urlPrimary={link}
          imgVideoPrimary={imgVideo}
          text={`Como la clase se enfoca en la práctica, al final se agregó un quiz. La recomendación es practicar el uso de Python para comprender mejor los conceptos.`}
        />
        <div className="classSubjects__section section" id="topics">
          <h4 className="title">Apuntes</h4>
          <div className="classSubjects__subsection">
            <Dropdowns
              links={dropdownsProgrammingTechniquesClass3}
              page={numericId}
            />
          </div>
          <div className="classSubjects__gridSubsection">
            <div
              className="classSubjects__subsection"
              id={dropdownsProgrammingTechniquesClass3[0].id}
            >
              <h3>{dropdownsProgrammingTechniquesClass3[0].title}</h3>
              <img
                loading="lazy"
                src={functionPrint}
                alt="imagen de la función print()"
                className="classSubjects__img "
                onClick={() => openModal(functionPrint)}
              />
            </div>
            <div
              className="classSubjects__subsection"
              id={dropdownsProgrammingTechniquesClass3[1].id}
            >
              <h3>{dropdownsProgrammingTechniquesClass3[1].title}</h3>
              <img
                loading="lazy"
                src={argumentsFunctions}
                alt="argumentos de funciones"
                className="classSubjects__img"
                onClick={() => openModal(argumentsFunctions)}
              />
            </div>
          </div>
          <div
            className="classSubjects__subsection"
            id={dropdownsProgrammingTechniquesClass3[2].id}
          >
            <h3>{dropdownsProgrammingTechniquesClass3[2].title}</h3>
            <div className="classSubjects__grids">
              <img
                loading="lazy"
                src={functionInvocation}
                alt="invocación de funciones"
                className="classSubjects__img classSubjects__img--height"
                onClick={() => openModal(functionInvocation)}
              />
            </div>
          </div>
          <div
            className="classSubjects__subsection"
            id={dropdownsProgrammingTechniquesClass3[3].id}
          >
            <h3>{dropdownsProgrammingTechniquesClass3[3].title}</h3>
            <div className="classSubjects__grids">
              <img
                loading="lazy"
                src={escapeCharacters}
                alt="Caracteres de escape"
                className="classSubjects__img"
                onClick={() => openModal(escapeCharacters)}
              />
              <img
                loading="lazy"
                src={escapeCharacter}
                alt="Caracter de escape"
                className="classSubjects__img"
                onClick={() => openModal(escapeCharacter)}
              />
            </div>
          </div>
          <div
            className="classSubjects__subsection"
            id={dropdownsProgrammingTechniquesClass3[4].id}
          >
            <h3>{dropdownsProgrammingTechniquesClass3[4].title}</h3>
            <div className="classSubjects__grids">
              <img
                loading="lazy"
                src={multipleArguments}
                alt="multiples argumetos"
                className="classSubjects__img classSubjects__img--height"
                onClick={() => openModal(multipleArguments)}
              />
            </div>
          </div>
          <div
            className="classSubjects__subsection"
            id={dropdownsProgrammingTechniquesClass3[5].id}
          >
            <h3>{dropdownsProgrammingTechniquesClass3[5].title}</h3>
            <div className="classSubjects__grids">
              <img
                loading="lazy"
                src={arguments1}
                alt="palabras clave de argumentos de clave 1"
                className="classSubjects__img"
                onClick={() => openModal(arguments1)}
              />
              <img
                loading="lazy"
                src={arguments2}
                alt="palabras clave de argumentos de clave 2"
                className="classSubjects__img"
                onClick={() => openModal(arguments2)}
              />
              <img
                loading="lazy"
                src={arguments3}
                alt="palabras clave de argumentos de clave 3"
                className="classSubjects__img"
                onClick={() => openModal()}
              />
            </div>

            <div className="classSubjects__grids">
              <img
                loading="lazy"
                src={arguments4}
                alt="palabras clave de argumentos de clave 1"
                className="classSubjects__img classSubjects__img--width"
                onClick={() => openModal(arguments4)}
              />
              <img
                loading="lazy"
                src={arguments5}
                alt="palabras clave de argumentos de clave 1"
                className="classSubjects__img classSubjects__img--width"
                onClick={() => openModal(arguments5)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="classSubjects__sectionTask" id="task">
        <div className="classSubjects__container container">
          <h3 className="title">Tarea de Tecnicas en Programación</h3>
          <ul className="classSubjects__lists">
            <li>
              Completar las Tarea de funcion Print() del{" "}
              <a
                rel="noopener noreferrer"
                className="classSubjects__link"
                href="https://aulasvirtuales.bue.edu.ar/"
                target="_blank"
              >
                Aula Virtua
              </a>
              l
            </li>
          </ul>
        </div>
      </section>
      <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} />
    </>
  );
};

export default ProgrammingTechniquesClass3;
