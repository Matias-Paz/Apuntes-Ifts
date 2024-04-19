import { useState } from "react";
import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import ModalClass from "../../../components/ModalClass/ModalClass";
import Dropdowns from "../../../components/Dropdowns/Dropdowns";
import Quiz from "../../../components/Quiz/Quiz";
import biteImg from "/bite-img.png";
import tableImg from "/bits-table-img.webp";
import imgVideo from "/video-base.webp";

const dropdownsDataBasePageClass1 = [
  { title: "Regla del curso", id: "tema1" },
  { title: "¿Qué es una base de datos? ¿Y para qué sirve?", id: "tema2" },
  { title: "¿Cuál es la diferencia entre datos e información?", id: "tema3" },
  { title: "¿Cuál es el objetivo de una base de datos?", id: "tema4" },
  {
    title: `¿Qué significa "relacional" en el contexto de las bases de datos?`,
    id: "tema5",
  },
  {
    title:
      "¿Por qué es importante evitar errores en el diseño de base de datos?",
    id: "tema6",
  },
  {
    title: "¿Para qué se utiliza la información?",
    id: "tema6",
  },
  {
    title: `¿Cuál es la definición de "dato"? (según Gustavo Virtos)`,
    id: "tema7",
  },
  {
    title: `¿Cuánto espacio ocupa un dato en una base de datos?`,
    id: "tema8",
  },
  {
    title: `Escala de valor de una base de datos`,
    id: "tema9",
  },
  {
    title: `Documentación de base de datos`,
    id: "tema10",
  },
];

const DataBaseClass1 = ({ numericId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const link = "https://www.youtube.com/watch?v=J8v2z4pQTxs";

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="classSubjects">
        <div className="classSubjects__quiz container">
          <div>
            <h3 className="title">Administración de Base de Datos</h3>
            <p className="classSubjects__subtitle">Profesor: Gustavo Virtos</p>
          </div>
          <Quiz
            text={"Quiz calificatorio"}
            href={"https://quizzifts.netlify.app/basededatos1"}
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
        <Dropdowns links={dropdownsDataBasePageClass1} page={numericId} />

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[0].id}
        >
          <h5>{dropdownsDataBasePageClass1[0].title}</h5>
          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">Horario:</span>{" "}
            Lunes de 18:30 a 19:50 horas y Miercoles 18:30 a 22:00 horas. Se
            ofrece una tolerancia de 15 minutos en el horario.
          </p>
          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">
              {" "}
              Cuatro clases presenciales:{" "}
            </span>{" "}
            dos para exámenes, una para el parcial recuperatorio y el examen
            final. Además, se contempla la posibilidad de sumar una clase
            adicional de repaso, enfocada en los puntos que requieran mayor
            atención.
          </p>
          <div className="classSubjects__grid classSubjects__grid--color">
            <p>
              <span className="classSubjects__paragraph--bold">
                Dos examenes
              </span>{" "}
              (y un examen final en caso de regularizar) y{" "}
              <span className="classSubjects__paragraph--bold">
                Un trabajo final integrador
              </span>{" "}
            </p>
            <ul className="classSubjects__lists">
              <li>
                <span className="classSubjects__paragraph--bold">
                  Regularizar cursada
                </span>
                : aprobar los dos exámenes cuatrimestrales, aprobar el trabajo
                final integrador y participar en las clases.
              </li>
              <li>
                <span className="classSubjects__paragraph--bold">
                  Promocionar cursada
                </span>
                : 7 o más en cada uno de los exámenes cuatrimestrales, aprobar
                el trabajo final integrador y participar en las clases.
              </li>
              <li>
                <span className="classSubjects__paragraph--bold">
                  Aprobar cursada
                </span>
                : aprobar los exámenes (cuatrimestrales y finales), aprobar el
                trabajo final integrador y participar en las clases.
              </li>
              <li>
                <span className="classSubjects__paragraph--bold">
                  Recuperatorio:
                </span>{" "}
                se puede recuperar un examen, pero no se puede promocionar si se
                debe rendir un examen recuperatorio.
              </li>

              <li>
                <span className="classSubjects__paragraph--bold">
                  Participar en clase
                </span>
                : la participación en clase es importante, ya que si no se
                participa, no se puede promocionar ni aprobar la materia.
                Además, se tomará nota de los estudiantes que participen, y se
                realizarán preguntas al azar para verificar si los estudiantes
                están prestando atención.
              </li>
              <li>
                <span className="classSubjects__paragraph--bold">
                  Trabajo final integrador
                </span>
                : es un trabajo de investigación individual donde se elige un
                tema asignado por el profesor entre tres opciones, como bases de
                datos relacionales, bases de datos de inteligencia artificial,
                entre otros. El documento se elabora en Word y se envía por
                correo electrónico. En caso de que haya correcciones necesarias,
                se devuelve el trabajo con una semana de plazo para realizar las
                correcciones pertinentes.
              </li>
            </ul>
            <p>Se tomará asistencia de los estudiantes en todas las clases.</p>
          </div>
          <div className="classSubjects__grids classSubjects__grid--color">
            <div>
              <p>
                <span className="classSubjects__paragraph--bold">
                  Fechas de examenes
                </span>
                : No hay fechas establecidas para los exámenes, sin embargo,
                contaremos con aproximadamente 5 clases antes del parcial,
                siempre y cuando progresemos de manera adecuada en el tema de
                diseño.
              </p>
            </div>
            <p>
              <span className="classSubjects__paragraph--bold">
                Correo del profesor:
              </span>{" "}
              <a href="mailto:gustavovirtos@outlook.com.ar">
                gustavovirtos@outlook.com.ar
              </a>
            </p>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[1].id}
        >
          <h5>{dropdownsDataBasePageClass1[1].title}</h5>
          <p>
            Es conjunto de datos o lugar donde hay datos almacenados, guardados
            o escondidos. Sirve para almacenar y organizar cantidades de
            información de manera estructurada y accesible.
          </p>
        </div>
        <div className="classSubjects__grid--color">
          <p>
            En una base de datos, se suelen almacenar{" "}
            <span className="classSubjects__paragraph--bold">DATOS</span> que
            posteriormente pueden ser procesados y convertidos en{" "}
            <span className="classSubjects__paragraph--bold">INFORMACIÓN</span>{" "}
            a través de consultas, análisis u otras operaciones.
          </p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[3].id}
        >
          <h5>{dropdownsDataBasePageClass1[3].title}</h5>

          <p>
            La función principal consiste en almacenar datos, organizarlos de
            acuerdo con criterios de orden específicos, facilitar su acceso o
            consulta y garantizar la protección de la información.
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Si los datos no está organizada adecuadamente, la búsqueda será
              más lenta, entre otros posibles errores.
            </p>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[4].id}
        >
          <h5>{dropdownsDataBasePageClass1[4].title}</h5>
          <p>
            Las distintas entidades se relacionan entre sí, lo que significa que
            el término {"relacional"} se refiere a cómo los datos están
            interconectados o relacionados dentro de la base de datos,
            distribuidos en campos, tablas y otros componentes. Este enfoque
            permite cumplir con el objetivo previsto de la base de datos.
          </p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[5].id}
        >
          <h5>{dropdownsDataBasePageClass1[5].title}</h5>
          <p>
            Porque un buen diseño facilita la consulta, la accesibilidad del
            dato, la integridad del dato y la velocidad de respuesta.
          </p>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid--color">
              <p>
                Es crucial recordar que un diseño adecuado garantiza la
                accesibilidad e intuición de datos y establece la relación
                existente entre los datos. Por ejemplo, vincula el nombre
                &quot;Gustavo Virtos&quot; con su DNI: 3111 2222.
              </p>
            </div>
            <div className="classSubjects__grid--color">
              <p>
                Tambien es importante tener en cuenta que existen necesidades
                solicitadas para que sea una buena base datos. Por ejemplo, si
                se nos solicitan varios productos, la base de datos debe estar
                seteada para soportar múltiples clientes.
              </p>
            </div>
          </div>
          <p>
            Ademas, porque una base de datos mal estructurada puede llegar a un
            punto crítico donde sea más conveniente desarrollar una
            completamente nueva, en lugar de intentar solucionar sus múltiples
            fallos.
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Tomemos como ejemplo un caso real en una empresa de facturación de
              llamadas que implementó un nuevo software. El desafío surgió
              cuando el software, diseñado para registrar el consumo de llamadas
              y el uso de datos en el extranjero, se topó con una base de datos
              incapaz de manejar múltiples monedas y ajustar las cotizaciones en
              tiempo real. Ante esta situación, la empresa se vio obligada a
              rediseñar su base de datos desde cero, ya que actualizar y
              corregir cada tabla individualmente, ajustando sus relaciones una
              por una, resultaba impracticable.
            </p>
          </div>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[6].id}
        >
          <h5>{dropdownsDataBasePageClass1[6].title}</h5>
          <p>
            Finalmente,{" "}
            <span className="classSubjects__paragraph--bold">
              la información se utiliza para tomar decisiones
            </span>
            .
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Por ejemplo, una empresa puede planificar una campaña publicitaria
              basándose en la cantidad de personas en su base de datos que
              consumen un producto, cuántas lo adquieren en oferta, cuántas lo
              compran en oferta utilizando una tarjeta, etc. Se realiza un
              análisis detallado para fundamentar estas decisiones.
            </p>
          </div>
          <p>
            Si la información es incorrecta la consulta resultará errónea.
            Además, sino es{" "}
            <span className="classSubjects__paragraph--bold">PRECISA</span>,{" "}
            <span className="classSubjects__paragraph--bold">CONFIABLE</span>,{" "}
            <span className="classSubjects__paragraph--bold">ADECUADA</span> y{" "}
            <span className="classSubjects__paragraph--bold">OPORTUNA</span> no
            servirá para tomar decisiones acertadas.
          </p>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[7].id}
        >
          <h5>{dropdownsDataBasePageClass1[7].title}</h5>
          <p>
            Es la representación de una variable que puede ser cualitativa o
            cuantitativa, es decir, puede ser numérica o un valor asignado en
            letra.
          </p>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[2].id}
        >
          <h5>{dropdownsDataBasePageClass1[2].title}</h5>
          <p className="classSubjects__paragraphItem">
            <span>Datos</span> ≠ <span>Información</span>
          </p>
          <p>
            En el contexto de una base de datos, los términos &quot;datos&quot;
            e &quot;información&quot; son conceptos relacionados pero distintos:
          </p>
          <ul className="classSubjects__lists">
            <li>
              <span className="classSubjects__paragraph--bold">Datos</span>: Se
              refiere a hechos crudos, sin procesar o interpretar. Estos pueden
              ser números, letras, imágenes, sonidos, etc. Los datos por sí
              solos no tienen significado o contexto específico.
            </li>
            <li>
              <span className="classSubjects__paragraph--bold">
                Información
              </span>
              : Es el resultado de procesar y organizar los datos de manera que
              tengan significado y utilidad.
            </li>
          </ul>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[8].id}
        >
          <h5>{dropdownsDataBasePageClass1[8].title}</h5>
          <p>
            El peso de una base de datos está determinado por la cantidad de
            información que contiene en un momento dado, lo que puede implicar
            una cierta capacidad. Sin embargo, es crucial comprender las escalas
            de información para calcular el máximo que se asignará a fin de
            reservar hardware adecuadamente.
          </p>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[9].id}
        >
          <h5>{dropdownsDataBasePageClass1[9].title}</h5>
          <p>
            Un <span className="classSubjects__paragraph--bold">byte</span> es
            la unidad mínima de información y se agrupa de 8 para formar un{" "}
            <span className="classSubjects__paragraph--bold">bit</span>. Cada
            uno de estos 1 y 0 es un bit, y en 1 byte hay 8 bits:
          </p>
          <img
            loading="lazy"
            src={biteImg}
            alt="imagen de byte"
            className="classSubjects__img"
            onClick={() => openModal(biteImg)}
          />
          <div className="classSubjects__grid--color">
            <p>
              Un carácter ocupa 8 bits, equivalente a 1 byte, en memoria. Por
              otro lado, un valor lógico, que puede ser verdadero o falso,
              también utiliza 1 byte, a pesar de que efectivamente solo
              representa un bit. Esta asignación de espacio se justifica por
              razones de alineación en la memoria, así como por la necesidad de
              optimizar el acceso y la manipulación de los datos.
            </p>
          </div>
          <p>
            Existe una tabla de equivalencia de peso, que agrupa las
            equivalencias en grupos de 1024:
          </p>
          <img
            loading="lazy"
            style={{ marginBottom: "1rem" }}
            src={tableImg}
            alt="imagen de byte"
            className="classSubjects__img"
            onClick={() => openModal(tableImg)}
          />
          <div className="classSubjects__grid--color">
            <p>
              Aunque los símbolos de la unidad de megabit (Mb) y megabyte (MB)
              son distintos, durante las convenciones se cometió un error al
              establecer la simbología para la unidad de gigabyte (GB) y el
              geopbyte (GB).
            </p>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsDataBasePageClass1[10].id}
        >
          <h5>{dropdownsDataBasePageClass1[10].title}</h5>
          <p>
            Toda base de datos debe estar adecuadamente documentada. Esto
            significa que una base de datos, compuesta por numerosas tablas
            interrelacionadas, debe contar con una documentación que detalle
            aspectos como el contenido de todas las tablas, el peso de cada una,
            el tipo de datos presente en cada campo, así como la significación
            de estos datos, entre otros elementos. Esta documentación debe
            ofrecer un resumen o explicación comprehensiva de todos los datos
            técnicos relevantes.
          </p>
          <p>
            Además, deberá incluir{" "}
            <span className="classSubjects__paragraph--bold">
              un Diagrama de Entidad-Relación (ERD, por sus siglas en inglés)
            </span>
            , que grafica la estructura y las relaciones entre las distintas
            entidades. Toda esta documentación debe ser almacenada en{" "}
            <span className="classSubjects__paragraph--bold">
              una carpeta operativa
            </span>
            , destinada a conservar toda la información técnica de la base de
            datos. Incluso en caso de modificaciones, es crucial que se
            registren en esta carpeta operativa.
          </p>

          <p>
            Existe convenciones para hacer un buen diseño de base de datos,
            aunque tanto en programación como base de datos no todos lo
            respetan.{" "}
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Porque lo que más odiamos los desarrolladores es hacer
              documentación. 😒💻📄🤯
            </p>
          </div>
        </div>
      </section>

      <section className="classSubjects__sectionTask" id="task">
        <div className="classSubjects__container container">
          <h3 className="title">Tarea de Administración de Base de Datos</h3>
          <ol className="classSubjects__lists">
            <li>
              Seleccionar un programa gratuito para la creación de diseños como{" "}
              <a
                href="https://app.diagrams.net"
                target="_blank"
                rel="noreferrer noopener"
                className="classSubjects__link"
              >
                Diagrams
              </a>
              .
            </li>
            <li>
              Leer clasificación de bases de datos y tipos de bases de datos.
            </li>
          </ol>
        </div>
      </section>
      <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} />
    </>
  );
};

export default DataBaseClass1;
