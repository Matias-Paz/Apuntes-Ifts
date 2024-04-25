import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import WorkProgress from "../../../components/WorkProgress/WorkProgress";
import imgVideo from "/video-base.webp";

const DataBaseClass5 = () => {
  const linkPrimary = "https://www.youtube.com/watch?v=XKJh83HJOcg";

  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Clase 5</h3>
          <p className="classSubjects__subtitle">Profesor: Gustavo Virtos</p>
        </div>
      </section>
      <YoutubeRecording
        urlPrimary={linkPrimary}
        imgVideoPrimary={imgVideo}
        imgVideoSecondary={imgVideo}
        text={`Por favor, les solicitamos discreción al ver el video y evitar compartirlo.`}
      />
      <WorkProgress />
    </>
  );
};

export default DataBaseClass5;
