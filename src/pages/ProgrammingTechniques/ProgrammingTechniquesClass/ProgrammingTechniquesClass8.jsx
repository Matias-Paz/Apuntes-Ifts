import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-tecnica.webp";

const ProgrammingTechniquesClass8 = () => {
  const link = "https://youtu.be/2tPeHSxXxF0";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Decisiones en Python y Bucles 2</h3>
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

export default ProgrammingTechniquesClass8;
