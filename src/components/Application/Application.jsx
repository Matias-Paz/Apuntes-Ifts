import apuntesApp from "/app-apuntes.webp";
import logoutIcon from "/logo.svg";
import "./Application.css";

const Application = () => {
  return (
    <>
      <div className="application">
        <div className="application__content">
          <div>
            <h3>Proximamente</h3>
            <div className="application__contentImg">
              <img
                className="application__img"
                src={logoutIcon}
                alt="logo de app de apuntes"
              />
              <h4>Nuestra app web</h4>
            </div>
          </div>
          <img src={apuntesApp} alt="icono de app apuntes" />
        </div>
      </div>
    </>
  );
};

export default Application;
