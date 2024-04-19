import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import Dropdowns from "../../../components/Dropdowns/Dropdowns.jsx";
import Quiz from "../../../components/Quiz/Quiz";
import imgVideo from "/video-base.webp";

const dropdownsDataBasePageClass2 = [
  { title: "Repaso de clase anterior", id: "tema1" },
  { title: "Base de datos de antes", id: "tema2" },
  { title: "Base de datos actuales", id: "tema3" },
  { title: `Tablero de Información`, id: "tema4" },
  {
    title: `¿Qué son las licencias flotantes y no flotantes?`,
    id: "tema5",
  },
  {
    title: `¿Qué es un sistema de información?`,
    id: "tema6",
  },
  {
    title: "¿Cómo se actualiza la información en una base de datos?",
    id: "tema7",
  },
];
const DataBaseClass2 = ({ numericId }) => {
  const link = "https://www.youtube.com/watch?v=mOPjMCj6ygw";

  return (
    <>
      <section className="classSubjects">
        <div className="classSubjects__quiz container">
          <div>
            <h3 className="title">Base de datos y tableros de información</h3>
            <p className="classSubjects__subtitle">Profesor: Gustavo Virtos</p>
          </div>
          <Quiz
            text={"Quiz calificatorio"}
            href={"https://quizzifts.netlify.app/basededatos2"}
          />
        </div>
      </section>
      <YoutubeRecording
        urlPrimary={link}
        imgVideoPrimary={imgVideo}
        text={`Por favor, les solicitamos discreción al ver el video y evitar compartirlo.`}
      />
      <section className="classSubjects__section section" id="topics">
        <h4 className="title">Apuntes</h4>
        <Dropdowns links={dropdownsDataBasePageClass2} page={numericId} />

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[0].id}
        >
          <h5>{dropdownsDataBasePageClass2[0].title}</h5>
          <p>
            Netamente vimos que una base de datos es un conjunto de{" "}
            <span className="classSubjects__paragraph--bold">DATOS</span>, al
            cual la base de datos le brinda protección, orden y permite su
            correcta relación para las consultas continuas. Si está
            correctamente ordenada una base de datos, obtenemos información,
            pero el secreto de una base de datos bien diseñada es pensarla en
            base a la necesidad que tenemos. En la base de datos, solo hay{" "}
            <span className="classSubjects__paragraph--bold">DATOS</span>.
          </p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[1].id}
        >
          <h5>{dropdownsDataBasePageClass2[1].title}</h5>

          <p>
            En otra época, las bases de datos existían, pero no eran
            automatizadas, sino que eran en papel que se ordenaba de forma
            alfabética. Por ejemplo: la guía telefónica es un ejemplo de base de
            datos.
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Las grandes bases de datos eran archivos que manejaban varias
              personas; por ejemplo, una persona manejaba los datos del cliente,
              otra los productos que consumían, etc. Como eran un sistema de
              orden correlativo, lo tenían todo de memoria.
            </p>
          </div>
          <div className="classSubjects__grid--color">
            <p>
              Netamentamente la base de datos de antes siempre guardaba
              información de forma ordenada y facilitaba información para
              consumirla.
            </p>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[2].id}
        >
          <h5>{dropdownsDataBasePageClass2[2].title}</h5>

          <p>
            Cuando surgió, la informática solucionó el problema de guardar
            grandes cantidades de información. Hoy día, gracias a esto, existen
            muchos gestores de datos, como (software que permite administrar una
            base de datos): MySQL, PostgreSQL, Oracle Database, etc.
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Las grandes bases de datos eran archivos que manejaban varias
              personas; por ejemplo, una persona manejaba los datos del cliente,
              otra los productos que consumían, etc. Como eran un sistema de
              orden correlativo, lo tenían todo de memoria.
            </p>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[3].id}
        >
          <h5>{dropdownsDataBasePageClass2[3].title}</h5>

          <p>
            Un tablero de información sirve para organizar distintos paneles con
            el objetivo de vincular una o varias bases de datos. Los presenta en
            forma de objetos, permitiendo así que los usuarios puedan acceder,
            seleccionar y crear un objeto para filtrar la base de datos de
            manera similar a como lo harían en Excel, todo esto sin necesidad de
            poseer conocimientos técnicos.
          </p>

          <div className="classSubjects__grids">
            <div className="classSubjects__grid--color">
              <p>
                Hoy dia{" "}
                <a
                  className="classSubjects__link"
                  href="https://cf.qlik.com/es-es/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  QlikView
                </a>{" "}
                domina el mercado en tableros de informacion, ya que es amigable
                con el usuario final. A diferencia de{" "}
                <a
                  className="classSubjects__link"
                  href="https://www.microstrategy.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  MicroStrategy
                </a>{" "}
                (que hace consultas preterminadas) es más rapido. La desventaja
                es que MicroStrategy procesa la información en tiempo real, pero
                QlikView no, lo que resulta en un retraso; además, requiere
                mucho más hardware. Tanto MicroStrategy y QlikView son gestores
                de base de datos.
              </p>
            </div>
            <div className="classSubjects__grid--color">
              <p>
                <span className="classSubjects__paragraph--bold">
                  Error del profesor
                </span>
                : Aunque el profesor mencionó que MicroStrategy y QlikView son
                gestores de bases de datos, en realidad son plataformas de
                Business Intelligence (BI) y análisis de datos, no gestores de
                bases de datos. La aclaración queda a discreción de los alumnos.
              </p>
            </div>
          </div>

          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">
              Definicion exacta de tablero de informacion (dashboard):
            </span>{" "}
            en el contexto de bases de datos es una herramienta visual
            interactiva que presenta datos y métricas clave de forma resumida y
            accesible. Estos tableros se diseñan para ofrecer a los usuarios una
            vista rápida y fácil de entender de su información crítica,
            habitualmente en tiempo real o cerca de este, permitiendo una toma
            de decisiones informada y eficaz.
          </p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[4].id}
        >
          <h5>{dropdownsDataBasePageClass2[4].title}</h5>

          <p>
            Las{" "}
            <span className="classSubjects__paragraph--bold">
              licencias es flotantes
            </span>{" "}
            permite a un número determinado de usuarios acceder y utilizar una
            aplicación de software simultáneamente.
          </p>
          <p>
            Las{" "}
            <span className="classSubjects__paragraph--bold">
              licencias no flotantes
            </span>{" "}
            están vinculadas de manera exclusiva a un usuario o dispositivo
            individual y no pueden ser compartidas o utilizadas por otros
            usuarios o en otros dispositivos.
          </p>
          <p className="classSubjects__grid--color">
            Las licencias flotantes y no flotantes son un modelo de
            licenciamiento de software.
          </p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[5].id}
        >
          <h5>{dropdownsDataBasePageClass2[5].title}</h5>

          <p>
            {`"Es un conjunto ordenado de mecanismos que tiene como fin la
            administración de los datos, procesándolos en información. Es decir,
            la idea es que recuperen los datos y los procesen fácil y rápido
            para obtener información. Por ejemplo, los tableros de informacion o
            un sistema de control de calidad es un sistema informacion"`}{" "}
            <span className="classSubjects__paragraph--bold">
              (Gustavo Virtos)
            </span>
            .
          </p>
          <p className="classSubjects__grid--color">
            Una base de datos maneja{" "}
            <span className="classSubjects__paragraph--bold">DATOS</span>,
            mientras que un sistema de información maneja{" "}
            <span className="classSubjects__paragraph--bold">INFORMACIÓN</span>.
          </p>
          <p className="classSubjects__grid--color">
            Una base de datos{" "}
            <span className="classSubjects__paragraph--bold">SOLA</span> no
            muestra información.
          </p>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass2[6].id}
        >
          <h5>{dropdownsDataBasePageClass2[6].title}</h5>

          <p>
            {" "}
            Se puede actualizar la información de diversas formas, dependiendo
            del sistema de gestión de bases de datos (SGBD) que estés utilizando
            y del método de actualización elegido, ya sea automático o manual.
          </p>
          <p>
            Aunque el profesor destacó en esta clase es que una base de datos
            puede cargarse de forma{" "}
            <span className="classSubjects__paragraph--bold">automatizada</span>{" "}
            mediante un sistema de consulta ETL (Extracción, Transformación y
            Carga) o{" "}
            <span className="classSubjects__paragraph--bold">manualmente</span>{" "}
            con una secuencia SQL.
          </p>
          <p className="classSubjects__grid--color">
            Por ejemplo, el sistema automático de Correo Argentino (y muchas
            empresas) le envía un archivo con la información actual del estado
            de entrega de los productos. Todos los días hay un sistema
            informático que levanta esa información y le insertan las tablas es
            automático.
          </p>
        </div>
      </section>
    </>
  );
};

export default DataBaseClass2;
