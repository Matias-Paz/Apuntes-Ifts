import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
// import Dropdowns from "../../../components/Dropdowns/Dropdowns.jsx";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-base.webp";

const DataBaseClass3 = () => {
  const linkPrimary = "https://www.youtube.com/watch?v=BCdhGgxDm5E";
  const linkSecondary = "https://www.youtube.com/watch?v=qFgh2Ho5954";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Base de datos y tableros de información</h3>
          <p className="classSubjects__subtitle">Profesor: Gustavo Virtos</p>
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

export default DataBaseClass3;
