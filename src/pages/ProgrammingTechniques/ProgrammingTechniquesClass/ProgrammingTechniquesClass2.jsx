import { useState } from "react";
import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording.jsx";
import Dropdowns from "../../../components/Dropdowns/Dropdowns.jsx";
import YoutubePlayer from "react-player/youtube";
import ModalClass from "../../../components/ModalClass/ModalClass.jsx";
import atajosWindows from "/atajos-windows.webp";
import atajosMac from "/atajos-mac.webp";
import atajosLinux from "/atajos-linux.webp";
import imgVideo from "/video-tecnica.webp";

const dropdownsProgrammingTechniquesClass2 = [
  { title: "¿Cómo instalar Python?", id: "detalle1" },
  { title: "¿Cómo instalar Visual Studio Code?", id: "detalle2" },
  { title: "Atajos de Visual Studio Code", id: "detalle3" },
];

const ProgrammingTechniquesClass2 = ({ numericId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const link = "https://youtu.be/Y6132WfbxnE";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Clase introductoria de Python</h3>
          <p className="classSubjects__subtitle">
            Profesor: Fernando Melissani
          </p>
        </div>

        <YoutubeRecording
          urlPrimary={link}
          imgVideoPrimary={imgVideo}
          text={`Dado que esta clase no contará con un examen parcial, no se han incluido apuntes. El objetivo principal es comprender los fundamentos teóricos de lo que constituye un lenguaje de programación. Mi recomendación personal es enfocarse en entender qué es un lenguaje compilado y qué es un lenguaje interpretado.`}
        />

        <div className="classSubjects__section section" id="topics">
          <h4 className="title">Detalles</h4>
          <div className="classSubjects__subsection">
            <Dropdowns
              links={dropdownsProgrammingTechniquesClass2}
              page={numericId}
            />
          </div>
          <div>
            <div
              className="classSubjects__subsection "
              id={dropdownsProgrammingTechniquesClass2[0].id}
            >
              <h3>{dropdownsProgrammingTechniquesClass2[0].title}</h3>
              <YoutubePlayer
                id="classSubjectsVideo1"
                url={"https://www.youtube.com/watch?v=i6j8jT_OdEUUiQGhWZ7UHU"}
                controls={true}
              />
            </div>
            <div
              className="classSubjects__subsection"
              id={dropdownsProgrammingTechniquesClass2[1].id}
            >
              <h3>{dropdownsProgrammingTechniquesClass2[1].title}</h3>
              <YoutubePlayer
                id="classSubjectsVideo2"
                className="classSubjects__video"
                url={"https://www.youtube.com/watch?v=8dUEhG45f9M"}
                controls={true}
              />
            </div>
          </div>

          <div
            className="classSubjects__subsection"
            id={dropdownsProgrammingTechniquesClass2[2].id}
          >
            <h3>{dropdownsProgrammingTechniquesClass2[2].title}</h3>
            <div className="classSubjects__grids">
              <img
                loading="lazy"
                src={atajosWindows}
                alt="atajos de teclado con Windows"
                className="classSubjects__img classSubjects__img--width"
                onClick={() => openModal(atajosWindows)}
              />
              <img
                loading="lazy"
                src={atajosMac}
                alt="atajos de teclado con MacOS"
                className="classSubjects__img classSubjects__img--width"
                onClick={() => openModal(atajosMac)}
              />
              <img
                loading="lazy"
                src={atajosLinux}
                alt="atajos de teclado con Linux"
                className="classSubjects__img classSubjects__img--width"
                onClick={() => openModal(atajosLinux)}
              />
            </div>
            <div className="classSubjects__grid--color">
              <p>
                Aunque están en inglés, estos son todos los atajos de teclado
                para Visual Studio Code.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} />
    </>
  );
};

export default ProgrammingTechniquesClass2;
