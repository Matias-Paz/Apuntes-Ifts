import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-tecnica.webp";

const ProgrammingTechniquesClass5 = () => {
  const link = "https://www.youtube.com/watch?v=CtNcRtcQ950";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Operadores y Variables de Python</h3>
          <p className="classSubjects__subtitle">
            Profesor: Fernando Melissani
          </p>
        </div>
        <YoutubeRecording urlPrimary={link} imgVideoPrimary={imgVideo} />
      </section>

      <WorkProgress />
    </>
  );
};

export default ProgrammingTechniquesClass5;
