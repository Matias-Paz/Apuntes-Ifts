import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-logica.webp";

const ComputationalLogic4 = () => {
  const linkPrimary = "https://www.youtube.com/watch?v=TZT12GccQYk";

  return (
    <>
      <section className="classSubjects" id="topics">
        <div className="container">
          <h3 className="title">Repaso antes del examen</h3>
          <p className="classSubjects__subtitle">
            Profesora: María Alicia Piñeiro
          </p>
        </div>
        <YoutubeRecording urlPrimary={linkPrimary} imgVideoPrimary={imgVideo} />
      </section>
      <WorkProgress />
    </>
  );
};

export default ComputationalLogic4;
