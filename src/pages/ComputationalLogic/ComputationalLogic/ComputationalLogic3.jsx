import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-logica.webp";

const ComputationalLogic3 = () => {
  const linkPrimary = "https://www.youtube.com/watch?v=bA3OvkZpgFY";
  const linkSecondary = "https://www.youtube.com/watch?v=aI-G5V-IGfA";

  return (
    <>
      <section className="classSubjects" id="topics">
        <div className="container">
          <h3 className="title">Lógica de Predicados</h3>
          <p className="classSubjects__subtitle">
            Profesora: María Alicia Piñeiro
          </p>
          {/* <Dropdowns links={dropdownsLogicClass1} /> */}
        </div>
        <YoutubeRecording
          urlPrimary={linkPrimary}
          urlSecondary={linkSecondary}
          imgVideoPrimary={imgVideo}
          imgVideoSecondary={imgVideo}
          text={`Por motivos de salud, la profesora decidió impartir esta clase de manera asincrónica, proporcionando dos videos obligatorios para su visualización. Además, en el aula virtual se encuentran disponibles más videos opcionales que se recomienda ver.`}
        />
      </section>
      <WorkProgress />
    </>
  );
};

export default ComputationalLogic3;
