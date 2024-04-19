import YoutubeRecording from "../../../components/YoutubeRecording/YoutubeRecording";
import ModalClass from "../../../components/ModalClass/ModalClass.jsx";
import Dropdowns from "../../../components/Dropdowns/Dropdowns";
import imgVideo from "/video-matematica.webp";
import conjuntosNumericos from "/conjuntos-numericos.webp";
import operacionAdiccion from "/operacion-adicion.jpg";
import operacionSustracion from "/operacion-sustraccion.png";
import operacionMultiplicacion from "/operacion-multiplicacion.png";
import operacionDivision from "/operacion-division.png";
import operacionPotencia from "/operacion-potenciacion.jpg";
import propiedadesPotencia from "/propiedades-potencia.jpeg";
import operacionRaiz from "/operacion-raiz.jpg";
import propiedadesRaiz from "/propiedades-radical.webp";
import erroresComunes from "/errores-comunes.webp";
import formulasEcuaciones from "/formula-ecuacion.png";
import errorEcuacion from "/error-ecuacion.webp";
import sistemaSustitucion from "/sistemas-sustitucion.webp";
import sistemaIgualacion from "/sistemas-igualacion.webp";
import iconPdf from "/icon-pdf.png";
import { useState } from "react";

const dropdownsMathematicalClass1 = [
  { title: "Regla del curso", id: "tema1" },
  { title: "Conjuntos numéricos", id: "tema2" },
  { title: "Propiedades de las operaciones", id: "tema3" },
  { title: `Operación de adición`, id: "tema5" },
  {
    title: "Operación de sustracción",
    id: "tema6",
  },
  {
    title: "Operación de multiplicación",
    id: "tema7",
  },
  {
    title: `Operación de división`,
    id: "tema8",
  },
  {
    title: `Operación de potenciación`,
    id: "tema9",
  },
  {
    title: `Operación de radicación`,
    id: "tema10",
  },
  {
    title: `Excepciones de las operaciones`,
    id: "tema11",
  },
  {
    title: `Errores comunes en los exámenes de operaciones de radicación y potenciación`,
    id: "tema12",
  },
  {
    title: `Formulas de ecuaciones`,
    id: "tema13",
  },
  {
    title: `Sistema de ecuaciones lineales mediante problemas y ejercicios`,
    id: "tema14",
  },
  {
    title: `Método de sustitución (de sistema de ecuaciones lineales)`,
    id: "tema15",
  },
  {
    title: `Método de igualación (de sistema de ecuaciones lineales)`,
    id: "tema16",
  },
];

function MathematicalAnalysisClass1({ numericId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const linkPrimary = "https://youtu.be/Wu5NaHW4HTA";
  const linkSecondary = "https://www.youtube.com/watch?v=1ezz92xfX8Y";

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
        <div className="container">
          <h3 className="title">Elementos de Análisis Matemático</h3>
          <p className="classSubjects__subtitle">Profesora: Graciela Medici</p>
        </div>
      </section>{" "}
      <YoutubeRecording
        urlPrimary={linkPrimary}
        urlSecondary={linkSecondary}
        imgVideoPrimary={imgVideo}
        imgVideoSecondary={imgVideo}
        text={`Por favor, les solicitamos discreción al ver el video y evitar compartirlo.`}
      />
      <section className="classSubjects__section section" id="topics">
        <h4 className="title">Apuntes</h4>
        <Dropdowns links={dropdownsMathematicalClass1} page={numericId} />

        <div className="classSubjects__subsection" id="tema1">
          <h5>Regla del curso</h5>
          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">Horario:</span>{" "}
            Jueves de 18:00 a 22:10 horas. Cuando la clase es presencial, se
            finaliza antes para cerrar el predio y por razones de seguridad.
          </p>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--color">
              <p>
                <span className="classSubjects__paragraph--bold">
                  Dos examenes
                </span>{" "}
                y{" "}
                <span className="classSubjects__paragraph--bold">
                  un examen final
                </span>{" "}
                (en mesa de llamado)
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Aprobar cursada
                  </span>
                  : 75% asistencia, 4 o más como nota y aprobar el examen final
                  de toda la materia.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Recuperatorio:
                  </span>{" "}
                  en caso de desaprobar, se puede recuperar uno o ambos
                  exámenes. Va ser la ultima semana de Junio (27/06/2024) o la
                  primera semana de Julio (05/07/2024).
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Examen Final
                  </span>
                  :{" "}
                  <span className="classSubjects__paragraph--bold">todos</span>{" "}
                  los estudiantes deben presentarse al examen final en la mesa
                  de llamados. Aunque algunos profesores podrían optar por
                  promover directamente a los alumnos, la profesora Graciela
                  Medici no sigue esta práctica y requiere que todos los
                  estudiantes se sometan al examen final. Cuando se aprueba la
                  cursada se debe elegir una de las próximas convocatorias (ya
                  sea la primera o la segunda) para presentarse al examen final.
                </li>
              </ul>
              <p>
                La asistencia a los dos parciales es obligatoria y en caso de
                ausentismo se deberá justificar vía mail u oralmente por el
                alumno/a o cualquier persona que se designe, dentro de las 24
                hs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[1].id}
        >
          <h3>{dropdownsMathematicalClass1[1].title}</h3>

          <div className="classSubjects__grid">
            <img
              loading="lazy"
              src={conjuntosNumericos}
              alt="imagen sobre los conjuntos numericos"
              className="classSubjects__img classSubjects__img--width"
              onClick={() => openModal(conjuntosNumericos)}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p style={{ marginBottom: ".5rem" }}>
              Los conjuntos numéricos son las categorías en las que se
              clasifican los números, en función de sus diferentes
              características. Existen diferentes tipos de números:
            </p>
            <ul className="classSubjects__lists classSubjects__grids">
              <span className="classSubjects__grid">
                <li>
                  {" "}
                  <span className="classSubjects__paragraph--bold">
                    Números Naturales (N):
                  </span>{" "}
                  este conjunto incluye todos los números enteros positivos, es
                  decir, 1, 2, 3, 4, ... hasta el infinito.{" "}
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Negativos:
                  </span>{" "}
                  son aquellos números que son menores que cero y son opuestos a
                  los números positivos. Por ejemplo, -1, -2, -3, y así
                  sucesivamente.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Enteros (Z):
                  </span>{" "}
                  los números enteros son aquellos que incluyen tanto los
                  positivos como los negativos, junto con el cero.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Fraccionarios o Fracciones
                  </span>
                  : es la expresión de una cantidad (normalmente el numerador)
                  dividida entre otra cantidad (normalmente el denominador).
                </li>
              </span>
              <span className="classSubjects__grid">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Racionales (Q):
                  </span>{" "}
                  todos los números que pueden representarse como el cociente de
                  dos números. Incluye a todas las fracciones, así como a los
                  números enteros.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Irracionales:
                  </span>{" "}
                  todos los números que{" "}
                  <span className="classSubjects__paragraph--bold">NO</span>{" "}
                  pueden representarse como el cociente de dos números. Algunos
                  ejemplos comunes son √2, π y e.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Reales (R):
                  </span>{" "}
                  Este conjunto incluye todos los números racionales e
                  irracionales.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Imaginarios (Im):
                  </span>{" "}
                  son aquellos de acuerdo a la lógica convencional, no pueden
                  existir. Sin embargo, pueden ser el resultado de operaciones
                  matemáticas comunes.{" "}
                  {`Se obtienen al tomar la raíz cuadrada de un número negativo. Están basados en la unidad imaginaria "i".`}
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Números Complejos (C):
                  </span>{" "}
                  {`son un conjunto de números que incluyen tanto los números reales como los números imaginarios.`}
                </li>
              </span>
            </ul>
          </div>

          <div className="classSubjects__grids">
            <div className="classSubjects__grid">
              <p>
                El resultado de dividir el numerador por el denominador de una
                fracción puede clasificarse en:
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Número Entero:
                  </span>{" "}
                  el resultado da numeros enteros.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Número Decimal Exacto:
                  </span>{" "}
                  la cuenta se corta sola con un resto de cero.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Número Decimal Periodico:
                  </span>{" "}
                  el resultado no da un número decimal exacto, sino que el
                  número continúa y se repite infinitamente.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Número Decimal Periodico Puro:
                  </span>{" "}
                  el resultado da un número decimal que detras de la coma se
                  repite. Por ejemplo, 0,3333... (el 3 es periodico).
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Número Decimal Periodico Mixto:
                  </span>{" "}
                  el resultado da un número decimal que tiene una parte no
                  periódica seguida de una parte periódica. Por ejemplo,
                  0,23333... (el 2 no se repite).
                </li>
              </ul>
            </div>
            <div className="classSubjects__grid--color classSubjects__grid--height">
              <p>
                Una fracción se obtiene al dividir cualquier número, incluido el
                0 como numerador, pero no se permite como denominador, ya que no
                se puede dividir por 0.
              </p>
            </div>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[2].id}
        >
          <h3>{dropdownsMathematicalClass1[2].title}</h3>
          <p>
            Existen 6 tipos de operación: operación de adición, operación de
            sustracción, operación de multiplicación, operación de división,
            operación de potenciación y operación de radicación.
          </p>
          <div className="classSubjects__grid--color">
            <p>
              Las operaciones se deben resolver de izquierda a derecha, un error
              común en los exámenes es realizarlas de derecha a izquierda cuando
              no hay paréntesis involucrados. Por ejemplo, la correcta
              resolución de 12 ÷ 6 ÷ 2 es realizar primero 12 ÷ 6, que da 2, y
              luego dividir el resultado por 2, obteniendo 1; es decir,{" "}
              <span className="classSubjects__paragraph--bold">12 ÷ 6 ÷ 2</span>{" "}
              = <span className="classSubjects__paragraph--bold">2 ÷ 2</span> ={" "}
              <span className="classSubjects__paragraph--bold">1</span>, y no{" "}
              <span className="classSubjects__paragraph--bold">12 ÷ 6 ÷ 2</span>{" "}
              = <span className="classSubjects__paragraph--bold">12 ÷ 3</span> ={" "}
              <span className="classSubjects__paragraph--bold">4</span>.
            </p>
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[3].id}
        >
          <h3>{dropdownsMathematicalClass1[3].title}</h3>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid">
              <p>
                Consiste en combinar o añadir dos números o más para obtener una
                cantidad final o total.
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad Conmutativa
                  </span>
                  : El orden de los sumandos no cambia el resultado (la suma).
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad Asociativa
                  </span>
                  : cuando se suman tres o más números, la manera en que se
                  agrupan no afecta el resultado.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Elemento Neutro
                  </span>
                  : El 0 es el elemento neutro en la suma, ya que sumar 0 a
                  cualquier número no lo cambia.
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={operacionAdiccion}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width classSubjects__grid--center"
              onClick={() => openModal(operacionAdiccion)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[4].id}
        >
          <h3>{dropdownsMathematicalClass1[4].title}</h3>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--order">
              <p>
                La resta, diferencia o sustracción es la operación que se
                utiliza para saber la diferencia entre dos números.
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Conmutativa
                  </span>
                  : el orden de los factores cambia el resultado (la resta).
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Asociativa
                  </span>
                  : el resultado de restar varios números puede variar según
                  cómo se agrupen.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Elemento Neutro
                  </span>
                  : establece que existe un número, comúnmente cero, tal que
                  restarlo a cualquier número no cambia su valor.
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={operacionSustracion}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width classSubjects__grid--center"
              onClick={() => openModal(operacionSustracion)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[5].id}
        >
          <h3>{dropdownsMathematicalClass1[5].title}</h3>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid">
              <p>
                Es una operación matemática que consiste en encontrar el
                resultado de multiplicar una cifra por otra.
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad Conmutativa
                  </span>
                  : el orden de los factores no cambia el producto.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad Asociativa
                  </span>
                  : cuando se suman tres o más números, la manera en que se
                  agrupan no afecta el resultado.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Elemento Neutro
                  </span>
                  : cualquier número multiplicado por 1 da como resultado el
                  mismo número.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad Distributiva
                  </span>
                  : establece que la multiplicación de un número por la suma o
                  la resta de dos números es igual a la suma o la resta (según
                  la multiplicación principal) de las multiplicaciones de ese
                  número por cada uno.
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={operacionMultiplicacion}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width classSubjects__grid--center"
              onClick={() => openModal(operacionMultiplicacion)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[6].id}
        >
          <h3>{dropdownsMathematicalClass1[6].title}</h3>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--order">
              <p>
                Es una distribución equitativa, es decir, repartir entre partes
                o grupos iguales.
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Conmutativa
                  </span>
                  : el orden de los factores cambia el resultado (el cociente).
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Asociativa
                  </span>
                  : el resultado de dividir varios números puede variar según
                  cómo se agrupen.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Elemento Neutro
                  </span>
                  : cualquier número dividido por 1 da como resultado el mismo
                  número.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad Distributiva
                  </span>
                  : establece que la división de un número dividido la suma o la
                  resta de dos números es igual a la suma o la resta (según la
                  división principal) de la divisiones de ese número dividido
                  cada uno.
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={operacionDivision}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width classSubjects__grid--center"
              onClick={() => openModal(operacionDivision)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[7].id}
        >
          <h3>{dropdownsMathematicalClass1[7].title}</h3>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--order">
              <p>
                Consiste en multiplicar un número, llamado base, por sí mismo
                tantas veces como lo indica el exponente.
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Conmutativa
                  </span>
                  : el orden de los factores cambia el resultado (la potencia).
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Asociativa
                  </span>
                  : el orden en que se agrupan las operaciones afecta el
                  resultado (la potencia).
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={operacionPotencia}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width classSubjects__grid--center"
              onClick={() => openModal(operacionPotencia)}
            />
          </div>
        </div>

        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[8].id}
        >
          <h3>{dropdownsMathematicalClass1[8].title}</h3>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--order">
              <p>Consiste en obtener la raíz de una cifra o de un enunciado.</p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Propiedad NO Conmutativa
                  </span>
                  : el orden de los factores cambia el resultado (la raiz).
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={operacionRaiz}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--width classSubjects__grid--center"
              onClick={() => openModal(operacionRaiz)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[9].id}
        >
          <h3>{dropdownsMathematicalClass1[9].title}</h3>
          <p>
            Las operaciones son ampliamente consistentes y aplicables, pero
            existen situaciones que podrían considerarse como{" "}
            <span
              className="classSubjects__paragraph--bold"
              style={{ color: "red" }}
            >
              {"excepciones"}
            </span>{" "}
            o casos especiales:
          </p>
          <div className="classSubjects__grids">
            <img
              loading="lazy"
              src={propiedadesPotencia}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--height"
              onClick={() => openModal(propiedadesPotencia)}
            />
            <img
              loading="lazy"
              src={propiedadesRaiz}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--height"
              onClick={() => openModal(propiedadesRaiz)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[10].id}
        >
          <h3>{dropdownsMathematicalClass1[10].title}</h3>

          <img
            loading="lazy"
            src={erroresComunes}
            alt="cuadro de operacion de adicción"
            className="classSubjects__img"
            onClick={() => openModal(erroresComunes)}
          />
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[11].id}
        >
          <h3>{dropdownsMathematicalClass1[11].title}</h3>

          <div className="classSubjects__grids">
            <img
              loading="lazy"
              src={formulasEcuaciones}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img "
              onClick={() => openModal(formulasEcuaciones)}
            />
            <img
              loading="lazy"
              src={errorEcuacion}
              alt="cuadro de operacion de adicción"
              className="classSubjects__img classSubjects__img--height"
              onClick={() => openModal(errorEcuacion)}
            />
          </div>
        </div>
        <div
          className="classSubjects__subsection"
          id={dropdownsMathematicalClass1[12].id}
        >
          <h3>{dropdownsMathematicalClass1[12].title}</h3>
          <p>
            Resolver problemas mediante sistemas de ecuaciones lineales es
            importante. A continuación, te presento un enlace a una página web
            que contiene 10 problemas diseñados para comprender cómo aplicar
            sistemas de ecuaciones lineales a diversas situaciones:{" "}
            <a
              href="https://www.problemasyecuaciones.com/Ecuaciones/problemas/sistemas/problemas-ecuaciones-sistemas-lineales-resueltos-numeros-edades-incognitas-ejemplos-explicados.html"
              className="classSubjects__paragraph--bold"
              aria-label="enlace de web de ecuaciones lineales"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Problemas y Ecuaciones - Sistemas de Ecuaciones Lineales].
            </a>
          </p>
        </div>
        <div className="classSubjects__gridSubsection">
          <div
            className="classSubjects__subsection"
            id={dropdownsMathematicalClass1[13].id}
          >
            <h3>{dropdownsMathematicalClass1[13].title}</h3>
            <img
              loading="lazy"
              className="classSubjects__img classSubjects__img--width"
              src={sistemaSustitucion}
              alt="formula de sistema de sustitucion"
              onClick={() => openModal(sistemaSustitucion)}
            />
          </div>
          <div
            className="classSubjects__subsection"
            id={dropdownsMathematicalClass1[14].id}
          >
            <h3>{dropdownsMathematicalClass1[14].title}</h3>
            <img
              loading="lazy"
              className="classSubjects__img classSubjects__img--width"
              src={sistemaIgualacion}
              alt="formula de sistema de sustitucion"
              onClick={() => openModal(sistemaIgualacion)}
            />
          </div>
        </div>
        <div className="classSubjects__grid--color">
          <p>Solamente se toma un sistema de ecuaciones lineales</p>
        </div>
      </section>
      <section className="classSubjects__sectionTask" id="task">
        <div className="classSubjects__container container">
          <h3 className="title">Tarea de Análisis Matemático</h3>
          <ol className="classSubjects__lists">
            <li>
              Completar las Tareas 1 y 2, y entregarlas a través del Aula
              Virtual en formato Word o PDF:
              <span className="classSubjects__flex">
                <a
                  href="https://drive.google.com/file/d/1oBhkNu0Rt8j79vSnhkaUpK-64OhknLiz/view?usp=drive_link"
                  className="classSubjects__listItem"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img loading="lazy" src={iconPdf} alt="icono de pdf" />
                  <p className="classSubjects__paragraph">Tareas 1</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1tlKEWTtEotVYrYWUftolEJS9v0-Y2K9z/view"
                  className="classSubjects__listItem"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img loading="lazy" src={iconPdf} alt="icono de pdf" />
                  <p className="classSubjects__paragraph">Tareas 2</p>
                </a>
              </span>
            </li>
            <li>
              Leer el PDF sobre Factoreo del Aula Virtual (sino se pude leer en
              la clase 2):
              <a
                href="https://drive.google.com/file/d/1fAjPqa6K2u6Z342LwBvJXP9zZSHK6KcX/view?usp=sharing"
                className="classSubjects__listItem"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img loading="lazy" src={iconPdf} alt="icono de pdf" />
                <p className="classSubjects__paragraph">Factoreo</p>
              </a>
            </li>
            <li style={{ marginTop: ".5rem" }}>
              Estudiar para la evaluación diagnóstica (no calificatoria): todas
              las propiedades abordadas en la clase 1, así como un sistema de
              ecuaciones (sustitución o igualación) y inecuaciones (tema que no
              se cubrio en esta clase).
            </li>
          </ol>
        </div>
      </section>
      <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} />
    </>
  );
}

export default MathematicalAnalysisClass1;
