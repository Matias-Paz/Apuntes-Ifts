import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-tecnica.webp";

//

const ProgrammingTechniquesClass7 = () => {
  const link = "https://www.youtube.com/watch?v=tmAiDgwWYuM";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Decisiones en Python y Bucles</h3>
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

export default ProgrammingTechniquesClass7;
