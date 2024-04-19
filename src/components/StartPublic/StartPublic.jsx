import iconSeguridad from "/icon-seguiridad.png";
import StopDog from "/dog-stop.png";
import "./StartPublic.css";

const StartPublic = () => {
  return (
    <section className="startPublic container" id="notes">
      <img
        className="startPublic__img"
        src={StopDog}
        alt="perro con letrero de alto"
      />
      <div className="startContent">
        <div className="startContent__title">
          <div className="startContent__img">
            <img src={iconSeguridad} />
          </div>
          <h3 className="title">Seguridad activada</h3>
        </div>
        <p>
          ¡Hola! Para garantizar la seguridad y facilitar el acceso a los
          apuntes, hemos implementado un sistema de inicio de sesión. Esto nos
          permite distinguir entre estudiantes y visitantes, asegurando un
          acceso estable y protegido. ¡Gracias por tu comprensión!
        </p>

        <a
          className="startPublic__link"
          href={"https://apuntesifts.netlify.app/login"}
        >
          <span>Inicio de Sesión</span>
          <svg
            className="startPublic__link-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default StartPublic;
