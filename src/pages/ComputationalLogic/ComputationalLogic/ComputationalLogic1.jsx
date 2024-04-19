import { useState } from "react";
import Dropdowns from "../../../components/Dropdowns/Dropdowns.jsx";
import ModalClass from "../../../components/ModalClass/ModalClass.jsx";
import cronograma from "/cronograma.webp";
import iconPdf from "/icon-pdf.png";

const dropdownsLogicClass1 = [
  { title: "Regla del curso", id: "tema1" },
  { title: "Cronograma del curso", id: "tema2" },
  {
    title: "¿A qué ayuda la lógica computacional?",
    id: "tema3",
  },
  {
    title: "¿Qué es una proposición lógica?",
    id: "tema4",
  },
  {
    title: "Proposiciones simples y proposiciones compuestas",
    id: "tema5",
  },
  {
    title: "Conjunción",
    id: "tema6",
  },
  {
    title: "Disyunción",
    id: "tema7",
  },
  {
    title: "Disyunción excluyente",
    id: "tema8",
  },
  {
    title: "Condicional",
    id: "tema9",
  },
  {
    title: "Bicondicional",
    id: "tema10",
  },
  {
    title: "Negación",
    id: "tema11",
  },
  {
    title: "Orden de prioridad de los conectivos lógicos",
    id: "tema12",
  },
  {
    title: "Tabla de verdad de las proposiciones compuestas",
    id: "tema13",
  },
  {
    title: "Contingencia",
    id: "tema14",
  },
  {
    title: "Contradiccion",
    id: "tema15",
  },
  {
    title: "Tautologia",
    id: "tema16",
  },
  {
    title: "Partes de la proposición condicional",
    id: "tema17",
  },
  {
    title: "Condicionales asociados a uno dado",
    id: "tema18",
  },
  {
    title: "Proposiciones equivalentes",
    id: "tema19",
  },
];

const ComputationalLogic1 = ({ numericId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main>
      <section className="classSubjects" id="topics">
        <div className="container">
          <h3 className="title">Lógica Proposional</h3>
          <p className="classSubjects__subtitle">
            Profesora: María Alicia Piñeiro
          </p>
          <Dropdowns links={dropdownsLogicClass1} page={numericId} />
        </div>
      </section>
      <section className="classSubjects__section section" id="tema1">
        <h4 className="title">Apuntes</h4>
        <div className="classSubjects__subsection">
          <h5>Regla del curso</h5>
          <p className="classSubjects__grid--color">
            <span className="classSubjects__paragraph--bold">Horario:</span>{" "}
            Martes de 18:00 a 22:10 horas. Cuando la clase es presencial, se
            finaliza antes para cerrar el predio y por razones de seguridad.
          </p>
          <div className="classSubjects__grids">
            <div className="classSubjects__grid classSubjects__grid--color">
              <p>
                <span className="classSubjects__paragraph--bold">
                  Dos examenes
                </span>{" "}
                (y un examen final en caso de regularizar)
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Regularizar cursada
                  </span>
                  : 75% asistencia y 4 o más como nota.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Promocionar cursada
                  </span>
                  : 75% asistencia y 7 o más en cada uno de los examenes.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Aprobar cursada
                  </span>
                  : 75% asistencia, 4 o más como nota y aprobar el examen final.
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Recuperatorio:
                  </span>{" "}
                  en caso de desaprobar, se puede recuperar uno o ambos
                  exámenes. Se puede promocionar en caso de ir a examen
                  recuperatorio.
                </li>
              </ul>
            </div>
            <div className="classSubjects__grid classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">
                Fechas de examenes
              </p>
              <ul className="classSubjects__lists">
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Primera evaluación:
                  </span>{" "}
                  el Martes 30 de Abril
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Segunda evaluación:
                  </span>{" "}
                  el Martes 18 de Junio
                </li>
                <li>
                  <span className="classSubjects__paragraph--bold">
                    Recuperatorio:
                  </span>{" "}
                  el Martes 25 de Junio
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema2">
          <h5>Cronograma del curso</h5>
          <img
            className="classSubjects__img"
            src={cronograma}
            onClick={() => openModal(cronograma)}
            alt="cronograma de curso"
          />
        </div>
        <div className="classSubjects__subsection" id="tema3">
          <h5>¿A qué ayuda la lógica computacional?</h5>
          <p>
            La formación de pensamiento lógico-matemático ayuda a razonar, ser
            capaz de abstraer, tener ideas innovadoras y prácticas, aprender y
            trasladar lo aprendido a nuevas situaciones, precisión en el
            lenguaje y forma de expresarse.
          </p>
        </div>
        <div className="classSubjects__subsection" id="tema4">
          <h5>¿Qué es una proposición lógica?</h5>
          <div className="classSubjects__grids">
            <div>
              <p>
                Una proposición lógica{" "}
                <span className="classSubjects__paragraph--bold">
                  (&quot;p&quot; o &quot;q&quot;){" "}
                </span>
                es todo enunciado susceptible de ser verdadero o falso. Por lo
                tanto, una no proposición sería algo que no tiene esta
                característica de ser verdadero o falso.
              </p>
              <div style={{ paddingTop: ".5rem" }}>
                <p>
                  <span className="classSubjects__paragraph--bold">p</span> :{" "}
                  proposición lógica
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">v (p) </span>
                  : valor de verdad de proposición lógica
                </p>
              </div>
            </div>

            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">
                Ejemplos (proposición lógica)
              </p>
              <div className="classSubjects__paragraphs">
                <div>
                  <p>
                    <span className="classSubjects__paragraph--bold">p </span>:
                    &quot;Cuatro es un número impar&quot;
                  </p>
                  <p>
                    <span className="classSubjects__paragraph--bold">
                      v ( p ) = F
                    </span>{" "}
                    (valor de verdad de p es Falso)
                  </p>
                </div>
                <div>
                  <p>
                    <span className="classSubjects__paragraph--bold">p </span>:
                    &quot;María Alicia Piñeiro tiene una hija llamada
                    Rocio&quot;
                  </p>
                  <p>
                    <span className="classSubjects__paragraph--bold">
                      v ( p ) = ?
                    </span>{" "}
                    (se puede determinar su valor de verdad al indagar)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="classSubjects__grid--color">
            <p className="classSubjects__paragraph--bold">
              Ejemplos (no proposición lógica)
            </p>
            <div
              className="classSubjects__grids"
              style={{ paddingTop: ".5rem" }}
            >
              <div>
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;¿Cómo te llamas?&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">
                    v ( p ) = ??
                  </span>{" "}
                  (es una pregunta interrogativa).
                </p>
              </div>

              <div>
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;color silla tiempo&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">
                    v ( p ) = ??
                  </span>{" "}
                  (es un expresiones sin sentido).
                </p>
              </div>
              <div>
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;2 + 2&quot; o &quot;x + 2&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">
                    v ( p ) = ??
                  </span>{" "}
                  (no afirma ni niega algo que pueda ser verdadero o falso).
                </p>
              </div>

              <div>
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;Cierra la puerta&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">
                    v ( p ) = ??
                  </span>{" "}
                  (es una orden).
                </p>
              </div>

              <div className="classSubjects__grid--column">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;x + 1 = 2&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">
                    v ( p ) = ??
                  </span>{" "}
                  (desconocemos cuál es el valor de x, por lo que no podemos
                  determinar un valor de verdad absoluto, ya sea verdadero o
                  falso).
                </p>
                <p>
                  Es una funcion proposicional, que se expresa:{" "}
                  <span className="classSubjects__paragraph--bold">
                    p ( x )
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema5">
          <h5>Proposiciones simples y proposiciones compuestas</h5>
          <p>
            <span className="classSubjects__paragraph--bold">
              Proposición simple
            </span>
            : es una proposiciones lógicas que enuncia una única idea.
          </p>
          <p>
            <span className="classSubjects__paragraph--bold">
              Proposición compuestas
            </span>
            : es la combinación (con operaciones lógicas) de proposiciones
            simples.
          </p>
          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">
                Ejemplos (proposición simple)
              </p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;Cuatro es un número impar&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">q </span>:
                  &quot;París es la capital de Francia&quot;
                </p>
              </div>
            </div>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">
                Ejemplos (proposiciones compuestas)
              </p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p ∧ q </span>
                  : &quot; Cuatro es un número impar y París es la capital de
                  Francia&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="classSubjects__grid--color">
            <p>
              Para mostrar todas las posibilidades de valores de verdad de las
              proposiciones simples, utilizamos las{" "}
              <span className="classSubjects__paragraph--bold">
                tablas de verdad
              </span>
              .
            </p>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema6">
          <h5>Conjunción</h5>
          <p>
            La conjunción resulta de combinar dos proposiciones simples con la
            palabra “<span className="classSubjects__paragraph--bold">y</span>
            ”, se representa con{" "}
            <span
              style={{ fontSize: "1.2rem" }}
              className="classSubjects__paragraph--bold"
            >
              ∧
            </span>
            . Unicamente es{" "}
            <span className="classSubjects__paragraph--bold">
              VERDADERA cuando ambas proposiciones simples lo son
            </span>
            .
          </p>

          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">Ejemplo</p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;π (pi) no es un número racional&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">q </span>:
                  &quot;252 es múltiplo de 6&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">p q </span>:
                  &quot;π (pi) no es un número racional{" "}
                  <span className="classSubjects__paragraph--bold">y</span> 252
                  es múltiplo de 6&quot;
                </p>
              </div>

              <div
                className="classSubjects__trueTable"
                style={{ "--grid-columns": 3 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p ∧ q
                </p>
                <p>V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema7">
          <h5>Disyunción</h5>
          <p>
            La disyunción resulta de combinar dos proposiciones simples con la
            palabra “<span className="classSubjects__paragraph--bold">o</span>
            ”, se representa con{" "}
            <span className="classSubjects__paragraph--bold">V</span>.
            Unicamente es{" "}
            <span className="classSubjects__paragraph--bold">
              FALSA cuando ambas proposiciones simples lo son
            </span>
            .
          </p>

          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">Ejemplo</p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;π (pi) no es un número racional&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">q </span>:
                  &quot;252 es múltiplo de 6&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">p v q </span>
                  : &quot;π (pi) no es un número racional{" "}
                  <span className="classSubjects__paragraph--bold">o</span> 252
                  es múltiplo de 6&quot;
                </p>
              </div>

              <div
                className="classSubjects__trueTable"
                style={{ "--grid-columns": 3 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p v q
                </p>
                <p>V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>F</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema8">
          <h5>Disyunción excluyente</h5>
          <p>
            La disyunción excluyente se representa con{" "}
            <span
              className="classSubjects__paragraph--bold"
              style={{ textDecoration: "underline" }}
            >
              v
            </span>
            . Es{" "}
            <span className="classSubjects__paragraph--bold">
              VERDADERA cuando una proposiciones simples es verdadera y la otra
              es falsa, pero no ambas
            </span>
            .
          </p>

          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">Ejemplo</p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;Se recuperará el primer parcial&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">q </span>:
                  &quot;Se recuperará el segundo parcial&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">p</span>{" "}
                  <span
                    className="classSubjects__paragraph--bold"
                    style={{ textDecoration: "underline" }}
                  >
                    v
                  </span>{" "}
                  <span className="classSubjects__paragraph--bold">q</span>:
                  &quot;Se recupera el primer parcial{" "}
                  <span className="classSubjects__paragraph--bold">o</span> el
                  segundo
                  <span className="classSubjects__paragraph--bold">
                    {" "}
                    pero no ambos
                  </span>
                  &quot;
                </p>
              </div>

              <div
                className="classSubjects__trueTable"
                style={{ "--grid-columns": 3 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p <span style={{ textDecoration: "underline" }}>v</span> q
                </p>
                <p>V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>F</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema9">
          <h5>Condicional</h5>
          <p>
            La condicional se representa con{" "}
            <span className="classSubjects__paragraph--bold">⇒</span> y la única
            situación en la que un condicional es{" "}
            <span className="classSubjects__paragraph--bold">
              FALSO es cuando la proposición inicial es verdadera
            </span>
            , pero{" "}
            <span className="classSubjects__paragraph--bold">
              la otra proposición final es falsa
            </span>
            .
          </p>

          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">Ejemplo</p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;Llover&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">q </span>:
                  &quot;Maria Alicia lleva chocolate a sus alumnos&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">p</span>{" "}
                  <span className="classSubjects__paragraph--bold">⇒</span>{" "}
                  <span className="classSubjects__paragraph--bold">q</span>:
                  &quot;
                  <span className="classSubjects__paragraph--bold">
                    Si
                  </span>{" "}
                  llueve
                  <span className="classSubjects__paragraph--bold">
                    , entonces
                  </span>{" "}
                  Maria Alicia lleva chocolate a sus alumnos &quot;
                </p>
              </div>

              <div
                className="classSubjects__trueTable"
                style={{ "--grid-columns": 3 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p <span>⇒</span> q
                </p>
                <p>V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema10">
          <h5>Bicondicional</h5>
          <p>
            La bicondicional se representa con{" "}
            <span className="classSubjects__paragraph--bold">⇔</span> y es{" "}
            <span className="classSubjects__paragraph--bold">
              VERDADERA cuando sus proposiciones simples tienen el mismo valor
              de verdad, ya sea verdadero o falso.
            </span>
          </p>

          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">Ejemplo</p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p</span>{" "}
                  <span className="classSubjects__paragraph--bold">⇔</span>{" "}
                  <span className="classSubjects__paragraph--bold">q</span>:
                  &quot;Es{" "}
                  <span className="classSubjects__paragraph--bold">
                    necesario y suficiente
                  </span>{" "}
                  ser socio para obtener el descuento&quot;
                </p>
              </div>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p</span>{" "}
                  <span className="classSubjects__paragraph--bold">⇔</span>{" "}
                  <span className="classSubjects__paragraph--bold">q</span>:
                  &quot;
                  <span className="classSubjects__paragraph--bold">
                    Solamente si
                  </span>{" "}
                  aprueban los parciales y el TP firman la materia
                </p>
              </div>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p</span>{" "}
                  <span className="classSubjects__paragraph--bold">⇔</span>{" "}
                  <span className="classSubjects__paragraph--bold">q</span>:
                  &quot;Una matriz cuadrada es inversible{" "}
                  <span className="classSubjects__paragraph--bold">
                    si y solo
                  </span>{" "}
                  si su determinante no es nulo
                </p>
              </div>

              <div
                className="classSubjects__trueTable"
                style={{ "--grid-columns": 3 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p <span>⇔</span> q
                </p>
                <p>V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema11">
          <h5>Negación</h5>
          <p>
            La negación se representa con{" "}
            <span className="classSubjects__paragraph--bold">~</span>, si bien
            se lee como{" "}
            <span className="classSubjects__paragraph--bold">“no”</span> hay
            varias maneras de indicar una negación.{" "}
            <span className="classSubjects__paragraph--bold">
              Cambia el valor de verdad de la proposición a la que se le aplica
            </span>
            .
          </p>

          <div className="classSubjects__grids" style={{ marginTop: ".5rem" }}>
            <div className="classSubjects__grid--color">
              <p className="classSubjects__paragraph--bold">Ejemplo</p>
              <div className="classSubjects__paragraphs">
                <p>
                  <span className="classSubjects__paragraph--bold">p </span>:
                  &quot;El tres es un número par&quot;
                </p>
                <p>
                  <span className="classSubjects__paragraph--bold">~ p </span>:
                  &quot;El tres{" "}
                  <span className="classSubjects__paragraph--bold">no</span> es
                  un número par&quot;
                </p>
              </div>

              <div
                className="classSubjects__trueTable"
                style={{ "--grid-columns": 2 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  ~ p
                </p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema12">
          <h5>Orden de prioridad de los conectivos lógicos</h5>
          <p>
            Se usará generalmente paréntesis, corchetes o llaves para
            especificar el orden en que se aplicarán los operadores lógicos. De
            no haber paréntesis, corchetes o llaves, se adopta el siguiente
            orden de prioridad.
          </p>

          <div className="classSubjects__grids">
            <div className="classSubjects__trueTable classSubjects__trueTable--grid">
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color classSubjects__trueTable--mobile">
                Nombre
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                Conectivo
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                Prioridad
              </p>
              <p className="classSubjects__trueTable--mobile">Negación</p>
              <p>~</p>
              <p className="classSubjects__trueTable--borderRight">1</p>
              <p className="classSubjects__trueTable--mobile">Conjunción</p>
              <p>∧</p>
              <p className="classSubjects__trueTable--borderRight">2</p>

              <p className="classSubjects__trueTable--mobile">Disyunción</p>
              <p>v</p>
              <p className="classSubjects__trueTable--borderRight">3</p>
              <p className="classSubjects__trueTable--mobile">
                Disyunción excluyente
              </p>
              <p style={{ textDecoration: "underline" }}>v</p>
              <p className="classSubjects__trueTable--borderRight">3.5</p>
              <p className="classSubjects__trueTable--mobile">Condicional</p>
              <p>⇒</p>

              <p className="classSubjects__trueTable--borderRight">4</p>
              <p className="classSubjects__trueTable--mobile">Bicondicional</p>
              <p>⇔</p>
              <p className="classSubjects__trueTable--borderRight">5</p>
            </div>
          </div>
          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p className="classSubjects__paragraph--bold">Ejemplo</p>
            <div className="classSubjects__paragraphs">
              <p>
                <span className="classSubjects__paragraph--bold">
                  ~ p ∧ q ⇒ r
                </span>{" "}
                &nbsp; se interpreta&nbsp; &#91; (~ p) ∧ q ⇒ r &#93;
              </p>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema13">
          <h5>Tabla de verdad de las proposiciones compuestas</h5>
          <p>
            Teniendo en cuenta los conectivos lógicos, construiremos la tabla de
            verdad de
            <span> ~ p ∧ q ⇒ r </span>, para ello vamos a ir haciendo en cada
            nueva columna de a una operación por vez:
          </p>
          <div className="classSubjects__paragraphs">
            <p className="classSubjects__paragraph--icon">
              <span>1</span> Primero colocamos los valores de p, q y r. No hay
              un orden estricto establecido, pero debe tener todas las
              posibilidades de p, q y r juntos.
            </p>
            <div
              className="classSubjects__trueTable classSubjects__trueTable--marginTop"
              style={{ "--grid-columns": 3 }}
            >
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                q
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                r
              </p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight">V</p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight">F</p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight">V</p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight">F</p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight">V</p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight">F</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight">V</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight">F</p>
            </div>
          </div>
          <div className="classSubjects__paragraphs">
            <p className="classSubjects__paragraph--icon">
              <span>2</span> Mediante p resolveremos ~ p, debido al orden de
              prioridad de los conectivos lógicos en [(~p) ∧ q ⇒ r].
            </p>
            <div
              className="classSubjects__trueTable classSubjects__trueTable--marginTop"
              style={{ "--grid-columns": 4 }}
            >
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                q
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                r
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color classSubjects__trueTable--borderRight">
                ~ p
              </p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
            </div>
          </div>
          <div className="classSubjects__paragraphs">
            <p className="classSubjects__paragraph--icon">
              <span>3</span> Con los datos de ~ p y q resolvemos ( ~ p ) ∧ q.
            </p>
            <div
              className="classSubjects__trueTable classSubjects__trueTable--zoom classSubjects__trueTable--marginTop"
              style={{ "--grid-columns": 5 }}
            >
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                q
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                r
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color ">
                ~ p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color classSubjects__trueTable--borderRight">
                ( ~ p ∧ q )
              </p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
            </div>
          </div>
          <div className="classSubjects__paragraphs">
            <p className="classSubjects__paragraph--icon">
              <span>4</span> Por último, con (~p ∧ q) y r, comparamos el
              conectivo lógico condicional [(~p ∧ q) ⇒ r].
            </p>
            <div
              className="classSubjects__trueTable classSubjects__trueTable--zoom classSubjects__trueTable--marginTop"
              style={{ "--grid-columns": 6 }}
            >
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                q
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                r
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                ~ p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                ( ~ p ∧ q )
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color classSubjects__trueTable--borderRight">
                [(~ p ∧ q) ⇒ r ]
              </p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--activeSecondary">F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
            </div>
            <p className="classSubjects__grid--color">
              {`Si en una proposición compuesta hay 'n' proposiciones simples, la
              tabla de verdad tiene 2 elevado a la 'n' renglones.`}
            </p>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema14">
          <h5>Contingencia</h5>
          <p>
            Una proposición compuesta que en algunos casos es verdadera y en
            otros falsa dependiendo de los valores de verdad de las
            proposiciones simples que la forman. En otras palabras,{" "}
            <span className="classSubjects__paragraph--bold">
              es una proposición compuesta que puede tener tanto valores
              VERDADEROS como FALSOS
            </span>
            .
          </p>

          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p className="classSubjects__paragraph--bold">Ejemplo</p>
            <div className="classSubjects__paragraphs">
              <p>
                En la tabla de verdad de las proposiciones compuestas del
                ejercicio anterior, la proposición compuesta de{" "}
                <span className="classSubjects__paragraph--bold">
                  [(~ p ∧ q) ⇒ r]
                </span>
                , es una contingencia porque tiene tanto valores verdaderos como
                falsos.
              </p>
            </div>
            <div
              className="classSubjects__trueTable classSubjects__trueTable--zoom "
              style={{ "--grid-columns": 6 }}
            >
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                q
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                r
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                ~ p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                ( ~ p ∧ q )
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color classSubjects__trueTable--borderRight">
                [(~ p ∧ q) ⇒ r ]
              </p>
              <p>V</p>
              <p>V</p>
              <p>V</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>V</p>
              <p>V</p>
              <p>F</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>V</p>
              <p>F</p>
              <p>V</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>V</p>
              <p>F</p>
              <p>F</p>
              <p>F</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p>V</p>
              <p>V</p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p>V</p>
              <p>F</p>
              <p>V</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>F</p>
              <p>F</p>
              <p>V</p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
              <p>F</p>
              <p>F</p>
              <p>F</p>
              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                V
              </p>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema15">
          <h5>Contradiccion</h5>
          <p>
            Es una proposición compuesta que es{" "}
            <span className="classSubjects__paragraph--bold">
              SIEMPRE FALSA
            </span>{" "}
            independientemente de los valores de verdad de las proposiciones
            simples que la forman.
          </p>

          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p className="classSubjects__paragraph--bold">Ejemplo</p>
            <div className="classSubjects__paragraphs">
              <p>
                La proposicion compuesta de{" "}
                <span className="classSubjects__paragraph--bold">
                  ( p ∧ ~ p )
                </span>{" "}
                siempre es falsa.
              </p>
            </div>
            <div
              className="classSubjects__trueTable classSubjects__trueTable--zoom "
              style={{ "--grid-columns": 3 }}
            >
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                ~ p
              </p>
              <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                ( p ∧ ~ p )
              </p>

              <p>V</p>
              <p>F</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
              <p>F</p>
              <p>V</p>
              <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                F
              </p>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema16">
          <h5>Tautologia</h5>
          <p>
            Es una proposición compuesta que es{" "}
            <span className="classSubjects__paragraph--bold">
              SIEMPRE VERDADERA
            </span>{" "}
            independientemente de los valores de verdad de las proposiciones
            simples que la forman.
          </p>

          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p
              className="classSubjects__paragraph--bold"
              style={{ paddingBottom: ".5rem" }}
            >
              Ejemplo
            </p>
            <p style={{ marginBottom: ".5rem" }}>
              La proposicion compuesta de{" "}
              <span className="classSubjects__paragraph--bold">
                [ p ⇒ ( p v q) ]
              </span>{" "}
              siempre es verdadera.
            </p>
            <div
              className="classSubjects__paragraphs"
              style={{ marginBottom: ".5rem" }}
            >
              <p className="classSubjects__paragraph--icon">
                <span>1</span> Primero colocamos los valores de p y q.
              </p>
              <div
                className="classSubjects__trueTable classSubjects__trueTable--marginTop"
                style={{ "--grid-columns": 2 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--borderRight">F</p>
              </div>
            </div>
            <div className="classSubjects__paragraphs">
              <p className="classSubjects__paragraph--icon">
                <span>2</span> Con los datos de p y q resolvemos p v q.
              </p>

              <div
                className="classSubjects__trueTable classSubjects__trueTable--marginTop"
                style={{ "--grid-columns": 3, marginBottom: ".5rem" }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p v q
                </p>
                <p>V</p>
                <p>V</p>
                <p
                  className="classSubjects__trueTable--borderRight
                    classSubjects__trueTable--activePrimary
                  "
                >
                  V
                </p>
                <p>V</p>
                <p>F</p>
                <p
                  className="classSubjects__trueTable--borderRight
                  classSubjects__trueTable--activePrimary
                  "
                >
                  V
                </p>

                <p>F</p>
                <p>V</p>
                <p
                  className="classSubjects__trueTable--borderRight
                  classSubjects__trueTable--activePrimary"
                >
                  V
                </p>
                <p>F</p>
                <p>F</p>
                <p
                  className="classSubjects__trueTable--borderRight
                  classSubjects__trueTable--activePrimary
                  "
                >
                  F
                </p>
              </div>
            </div>
            <div className="classSubjects__paragraphs">
              <p className="classSubjects__paragraph--icon">
                <span>3</span> Con los datos de p y p v q, al analizar el
                resultado de [ p ⇒ ( p v q ) ], observamos que siempre es
                verdadero.
              </p>
              <div
                className="classSubjects__trueTable classSubjects__trueTable--marginTop classSubjects__trueTable--zoom"
                style={{ "--grid-columns": 4 }}
              >
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p v q
                </p>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color classSubjects__trueTable--borderRight">
                  [ p ⇒ ( p v q ) ]
                </p>
                <p className="classSubjects__trueTable--color">V</p>
                <p>V</p>
                <p className="classSubjects__trueTable--color">V</p>
                <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                  V
                </p>
                <p className="classSubjects__trueTable--color">V</p>
                <p>F</p>
                <p className="classSubjects__trueTable--color">V</p>
                <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                  V
                </p>
                <p className="classSubjects__trueTable--color">F</p>
                <p>V</p>
                <p className="classSubjects__trueTable--color">V</p>
                <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                  V
                </p>
                <p className="classSubjects__trueTable--color">F</p>
                <p>F</p>
                <p className="classSubjects__trueTable--color">F</p>
                <p className="classSubjects__trueTable--borderRight classSubjects__trueTable--activePrimary">
                  V
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema17">
          <h5>Partes de la proposición condicional</h5>
          <p>
            En la implicación el primer término se denomina antecedente o
            hipótesis y al segundo consecuente o tesis.
          </p>
          <p className="classSubjects__paragraphItem">
            <span>
              p
              <span className="classSubjects__paragraphItem--left">
                <span>antecedente</span> <span>hipótesis</span>
                <span>condicion suficiente</span>
              </span>
            </span>
            ⇒
            <span>
              q
              <span className="classSubjects__paragraphItem--right">
                <span>consecuente</span> <span>tesis</span>
                <span>condicion necesaria</span>
              </span>
            </span>
          </p>
          <p>
            Una proposición es{" "}
            <span className="classSubjects__paragraph--bold">
              condición suficiente
            </span>{" "}
            para otra sentencia cuando{" "}
            <span className="classSubjects__paragraph--bold">
              la verdad de una proposición garantizaría la verdad de la segunda
              proposición
            </span>
            .
          </p>
          <p>
            Una proposición es{" "}
            <span className="classSubjects__paragraph--bold">
              condición necesaria
            </span>{" "}
            cuando{" "}
            <span className="classSubjects__paragraph--bold">
              es necesaria para garantizar la otra proposición
            </span>
            .
          </p>

          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p className="classSubjects__paragraph--bold">Ejemplo</p>
            <div className="classSubjects__paragraphs">
              <p>
                <span className="classSubjects__paragraph--bold">p </span>:
                &quot;Cae nieve&quot;
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">q </span>:
                &quot;Hace frío&quot;
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">p</span>{" "}
                <span className="classSubjects__paragraph--bold">⇒</span>{" "}
                <span className="classSubjects__paragraph--bold">q</span>:
                &quot;
                <span className="classSubjects__paragraph--bold">Si</span> cae
                nieve{" "}
                <span className="classSubjects__paragraph--bold">entonces</span>{" "}
                hace frío&quot;
              </p>
            </div>
            <ul style={{ marginTop: "1rem" }} className="classSubjects__lists">
              <li>
                <span className="classSubjects__paragraph--bold">
                  Condición suficiente:
                </span>{" "}
                &#34;Si cae nieve&#34; es la parte de la proposición que actúa
                como la condición suficiente. Esto significa que la presencia de
                nieve es suficiente para garantizar que hará frío. En otras
                palabras, cada vez que cae nieve, podemos estar seguros de que
                hará frío.
              </li>
              <li>
                <span className="classSubjects__paragraph--bold">
                  Condición necesaria:
                </span>{" "}
                &#34;Entonces hace frío&#34; es la parte de la proposición que
                actúa como la condición necesaria. Esto implica que la presencia
                de frío es necesaria para que haya caído nieve. Sin embargo,
                debemos tener en cuenta que la presencia de frío no garantiza
                necesariamente que haya caído nieve, ya que podría hacer frío
                por otras razones además de la nieve.
              </li>
            </ul>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema18">
          <h5>Condicionales asociados a uno dado</h5>
          <p>A partir de un condicional podemos formar otros:</p>

          <ul className="classSubjects__lists">
            <li>
              El{" "}
              <span className="classSubjects__paragraph--bold">recíproco</span>{" "}
              de una proposición condicional{" "}
              <span className="classSubjects__paragraph--bold">
                intercambia
              </span>{" "}
              la hipótesis (&#34;si&#34;) y la conclusión (&#34;entonces&#34;).
            </li>
            <li>
              El{" "}
              <span className="classSubjects__paragraph--bold">
                contrarrecíproco
              </span>{" "}
              de una proposición condicional{" "}
              <span className="classSubjects__paragraph--bold">
                intercambia y niega
              </span>{" "}
              tanto la hipótesis como la conclusión.
            </li>
            <li>
              La proposición{" "}
              <span className="classSubjects__paragraph--bold">contraria</span>{" "}
              es una afirmación diferente que{" "}
              <span className="classSubjects__paragraph--bold">
                no necesariamente niega la original
              </span>
              , pero es de una proposición condicional{" "}
              <span className="classSubjects__paragraph--bold">
                incompatible con ella
              </span>
              .
            </li>
          </ul>
          <p>
            El{" "}
            <span className="classSubjects__paragraph--bold">
              contrarrecíproco
            </span>{" "}
            siempre va a ser equivalente a la proposicion original.
          </p>
          <div
            className="classSubjects__trueTable classSubjects__trueTable--zoom "
            style={{ "--grid-columns": 2 }}
          >
            <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
              Condicion
            </p>
            <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
              Condicionales asociadas
            </p>

            <p className="classSubjects__gridColumn">p ⇒ q</p>
            <p className="classSubjects__trueTable--borderRight ">
              q ⇒ p&nbsp;&nbsp; &nbsp;{" "}
              <span className="classSubjects__paragraph--bold">recíproco</span>
            </p>
            <p className="classSubjects__trueTable--borderRight ">
              ~ q ⇒ ~ p&nbsp;&nbsp; &nbsp;{" "}
              <span className="classSubjects__paragraph--bold">
                contrarrecíproco
              </span>
            </p>
            <p className="classSubjects__trueTable--borderRight ">
              ~ p ⇒ ~ q&nbsp;&nbsp; &nbsp;{" "}
              <span className="classSubjects__paragraph--bold">contraria</span>
            </p>
          </div>
          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p className="classSubjects__paragraph--bold">Ejemplos</p>
            <div className="classSubjects__paragraphs">
              <p>
                <span className="classSubjects__paragraph--bold">Oración</span>:
                El cuadrado de todo número impar, es también impar.
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">q</span>:
                &quot;El cuadro impar&quot;
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">p</span>:
                &quot;Número impar&quot;
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">p</span>{" "}
                <span className="classSubjects__paragraph--bold">⇒</span>{" "}
                <span className="classSubjects__paragraph--bold">q</span>:{" "}
                &quot;
                <span className="classSubjects__paragraph--bold">Si</span> un
                número es impar,{" "}
                <span className="classSubjects__paragraph--bold">entonces</span>{" "}
                su cuadrado también es impar&quot;
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">q</span>{" "}
                <span className="classSubjects__paragraph--bold">⇒</span>{" "}
                <span className="classSubjects__paragraph--bold">p</span>:
                &quot;
                <span className="classSubjects__paragraph--bold">Si</span> un el
                cuadrado es impar,{" "}
                <span className="classSubjects__paragraph--bold">entonces</span>{" "}
                ese número es impar&quot; (recíproco)
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">~ q</span>{" "}
                <span className="classSubjects__paragraph--bold">⇒</span>{" "}
                <span className="classSubjects__paragraph--bold">~ p</span>:
                &quot;
                <span className="classSubjects__paragraph--bold">Si</span> el
                cuadrado{" "}
                <span className="classSubjects__paragraph--bold">no</span> es
                impar,{" "}
                <span className="classSubjects__paragraph--bold">entonces</span>{" "}
                ese número{" "}
                <span className="classSubjects__paragraph--bold">tampoco</span>{" "}
                es impar&quot; (contrarrecíproco)
              </p>
              <p>
                <span className="classSubjects__paragraph--bold">~ p</span>{" "}
                <span className="classSubjects__paragraph--bold">⇒</span>{" "}
                <span className="classSubjects__paragraph--bold">~ q</span>:
                &quot;<span className="classSubjects__paragraph--bold">Si</span>{" "}
                un número{" "}
                <span className="classSubjects__paragraph--bold">no</span> es
                impar,{" "}
                <span className="classSubjects__paragraph--bold">entonces</span>{" "}
                su cuadrado{" "}
                <span className="classSubjects__paragraph--bold">tampoco</span>{" "}
                es impar&quot; (contraria)
              </p>
            </div>
          </div>
        </div>
        <div className="classSubjects__subsection" id="tema19">
          <h5>Proposiciones equivalentes</h5>
          <p>
            Las proposiciones que tienen idénticas tablas de verdad se llaman
            <span className="classSubjects__paragraph--bold">
              {" "}
              equivalentes
            </span>
            , y lo indicamos con el símbolo
            <span className="classSubjects__paragraph--bold"> ≡</span>.
          </p>
          <div
            style={{ marginTop: ".5rem" }}
            className="classSubjects__grid--color"
          >
            <p className="classSubjects__paragraph--bold">Ejemplo</p>
            <div className="classSubjects__paragraphs">
              <p>
                Las proposiciones{" "}
                <span className="classSubjects__paragraph--bold">
                  &quot;~ q ⇒ ~ p&quot;, &quot;p ⇒ q&quot;
                </span>{" "}
                y{" "}
                <span className="classSubjects__paragraph--bold">
                  &quot;(~p) ∨ q&quot;
                </span>{" "}
                son equivalentes.
              </p>
            </div>
            <div
              className="grids--classSubjects"
              style={{ "--grid-columns": 7 }}
            >
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p
                </p>
                <p>V</p>
                <p>V</p>
                <p>F</p>
                <p>F</p>
              </div>
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  q
                </p>
                <p>V</p>
                <p>F</p>
                <p>V</p>
                <p>F</p>
              </div>
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  ~ q
                </p>
                <p>F</p>
                <p>V</p>
                <p>F</p>
                <p>V</p>
              </div>
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  ~ p
                </p>
                <p>F</p>
                <p>F</p>
                <p>V</p>
                <p>V</p>
              </div>
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  ~ q ⇒ p
                </p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
                <p className="classSubjects__trueTable--activePrimary">F</p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
              </div>
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  p ⇒ q
                </p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
                <p className="classSubjects__trueTable--activePrimary">F</p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
              </div>
              <div>
                <p className="classSubjects__paragraph--bold classSubjects__trueTable--color">
                  (~p) ∨ q
                </p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
                <p className="classSubjects__trueTable--activePrimary">F</p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
                <p className="classSubjects__trueTable--activePrimary">V</p>
              </div>
            </div>
            <p
              style={{ marginTop: "1rem" }}
              className="classSubjects__paragraph--bold"
            >
              Se representa: (~ q ⇒ ~ p) ≡ (p ⇒ q) ≡ (~ p ∨ q)
            </p>
          </div>
        </div>
      </section>
      <section className="classSubjects__sectionTask" id="task">
        <div className="classSubjects__container container">
          <h3 className="title">Tarea de Lógica Computacional</h3>
          <ol className="classSubjects__lists">
            <li>
              Como primera tarea en el{" "}
              <a
                href="https://aulasvirtuales.bue.edu.ar/"
                target="_blank"
                rel="noreferrer noopener"
                className="classSubjects__link"
              >
                aula virtual
              </a>
              , se requiere subir una fotografía de perfil para facilitar la
              identificación de los usuarios.
            </li>
            <li>
              Realiza los ejercicios del 1 al 4 de &quot;Lógica
              Proposicional&quot; del aula virtual.
              <a
                href="https://drive.google.com/file/d/1LGXygWtyQ-ZYbnfA18qSt_1Kgsq_YGcY/view"
                className="classSubjects__listItem"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={iconPdf} alt="icono de pdf" />
                <p className="classSubjects__paragraph">
                  Ejercicios de Lógica Proposional
                </p>
              </a>
            </li>
          </ol>
        </div>
      </section>
      <ModalClass isOpen={modalOpen} onClose={closeModal} img={selectedImage} />
    </main>
  );
};

export default ComputationalLogic1;
