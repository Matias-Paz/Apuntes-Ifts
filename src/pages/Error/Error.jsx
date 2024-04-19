import { useNavigate } from "react-router-dom";
import iconHome from "/icon-home.png";
import arrowRight from "/arrow-right.png";
import notFound from "/notFound.png";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <main className="error">
        <section className="error__container container">
          <a
            href="/#start"
            aria-label="boton de inicio"
            className="error__button error__button--right"
            onClick={goBack}
          >
            <img src={iconHome} alt="icono de inicio" />
          </a>
          <button
            className="error__button error__button--left"
            onClick={goBack}
          >
            <img src={arrowRight} alt="icono de derecha" />
          </button>
          <h1> ¡Oops! </h1>
          <p>Lo sentimos, la página que buscas no se ha encontrado</p>
        </section>

        <img
          className="error__background"
          src={notFound}
          alt="imagen de gato mirando"
        />
      </main>
    </>
  );
};

export default Error;
