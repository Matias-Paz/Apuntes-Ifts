import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-logica.webp";

const ComputationalLogic2 = () => {
  const linkPrimary = "https://youtu.be/mr3WoEhFQAM";
  const linkSecondary = "https://youtu.be/djlLOqJEWIA";
  const linkTertiary = "https://youtu.be/-eFaCpecjtc";

  return (
    <>
      <section className="classSubjects" id="topics">
        <div className="container">
          <h3 className="title">Leyes Logicas</h3>
          <p className="classSubjects__subtitle">
            Profesora: María Alicia Piñeiro
          </p>
          {/* <Dropdowns links={dropdownsLogicClass1} /> */}
        </div>
        <YoutubeRecording
          urlPrimary={linkPrimary}
          urlSecondary={linkSecondary}
          urlTertiary={linkTertiary}
          imgVideoSecondary={imgVideo}
          imgVideoTertiary={imgVideo}
          imgVideoPrimary={imgVideo}
        />
      </section>
      <WorkProgress />
    </>
  );
};

export default ComputationalLogic2;
