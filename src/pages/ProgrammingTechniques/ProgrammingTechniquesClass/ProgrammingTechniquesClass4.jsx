// import React from 'react'
import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";

import imgVideo from "/video-tecnica.webp";

const ProgrammingTechniquesClass4 = () => {
  const link = "https://youtu.be/QLn8OmS-ZJA";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Tipos de datos de Python</h3>
          <p className="classSubjects__subtitle">
            Profesor: Fernando Melissani
          </p>
        </div>
        <YoutubeRecording
          urlPrimary={link}
          imgVideoPrimary={imgVideo}
          //   text={`Como la clase se enfoca en la práctica, al final se agregó un quiz. La recomendación es practicar el uso de Python para comprender mejor los conceptos.`}
        />
      </section>

      {/* <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} /> */}
      <WorkProgress />
    </>
  );
};

export default ProgrammingTechniquesClass4;
