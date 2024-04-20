import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-matematica.webp";

const MathematicalAnalysisClass3 = () => {
  const linkPrimary = "https://www.youtube.com/watch?v=4diGN3AepV0";

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
        imgVideoPrimary={imgVideo}
        text={`Por favor, les solicitamos discreción al ver el video y evitar compartirlo.`}
      />
      <WorkProgress />
    </>
  );
};

export default MathematicalAnalysisClass3;
