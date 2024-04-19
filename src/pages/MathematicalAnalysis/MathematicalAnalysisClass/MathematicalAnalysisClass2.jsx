import Dropdowns from "../../../components/Dropdowns/Dropdowns";
import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import imgVideo from "/video-matematica.webp";

const dropdownsMathematicalClass2 = [
  { title: "Tareas y respuestas", id: "tema1" },
  { title: "Errores comunes que se repiten en los exámenes", id: "tema2" },
  { title: "Temas que aseguro que toma", id: "tema3" },
];

const MathematicalAnalysisClass2 = ({ numericId }) => {
  const linkPrimary = "https://www.youtube.com/watch?v=oaoG3J8P7XI";
  const linkSecondary = "https://www.youtube.com/watch?v=Qz6sisPGdcE";
  return (
    <>
      <section className="classSubjects">
        <div className="container">
          <h3 className="title">Repaso de la tarea anterior</h3>
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
      <section className="classSubjects__section section" id="topics">
        <h4 className="title">Apuntes</h4>
        <Dropdowns links={dropdownsMathematicalClass2} page={numericId} />

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass2[0].id}
        >
          <h5>{dropdownsMathematicalClass2[0].title}</h5>
          {/* <p className="classSubjects__grid--color">hola</p> */}
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass2[1].id}
        >
          <h5>{dropdownsMathematicalClass2[1].title}</h5>
          <p className="classSubjects__grid--color">hola</p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass2[2].id}
        >
          <h5>{dropdownsMathematicalClass2[2].title}</h5>
          <p className="classSubjects__grid--color">hola</p>
        </div>
      </section>
    </>
  );
};

export default MathematicalAnalysisClass2;
