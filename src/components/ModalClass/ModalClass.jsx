import { useEffect } from "react";
import iconDownload from "/icon-download.png";
import "./ModalClass.css";

const ModalClass = ({ isOpen, onClose, img }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    body.classList.toggle("hidden", isOpen);
    header.classList.toggle(
      "header--top",
      !isOpen && header.classList.contains("header--top")
    );

    return () => {
      body.classList.remove("hidden");
    };
  }, [isOpen]);

  return (
    <section
      className={`modalClass ${!isOpen ? "modalClass--opacity" : ""}`}
      onClick={onClose}
    >
      <div className="modalClass__container" onClick={onClose}>
        <img className="modalClass__img" src={img} alt="Modal" />
        <button className="btn__modalClass">x</button>
        <a className="cta__modalClass" href={img} download>
          <img src={iconDownload} alt="icono de descargar" />
        </a>
      </div>
    </section>
  );
};

export default ModalClass;
