import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-matematica.webp";

const MathematicalAnalysisClass4 = () => {
  const linkPrimary = "https://youtu.be/LpyBkUwOOmA";
  const linkSecondary = "https://youtu.be/QRGq64_wIGk";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Actividad de practica de temas anteriores</h3>
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
      <WorkProgress />
    </>
  );
};

export default MathematicalAnalysisClass4;
