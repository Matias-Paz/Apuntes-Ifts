import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-tecnica.webp";

// Decisiones en python - Bucles

const ProgrammingTechniquesClass6 = () => {
  const link = "https://www.youtube.com/watch?v=lXkyl7c8M2E";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title"> Comentarios e input()</h3>
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

export default ProgrammingTechniquesClass6;
