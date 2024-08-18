import heroImg from "/hero.jpg";
// import heroImg from "/libro-secreto.avif";
import "./Start.css";

const Start = ({ title, startParagraph = false, paragraph }) => {
  return (
    <section className="start__main" id="start">
      <picture
        className={`start__figure ${
          !startParagraph ? "start__figure--secondary" : ""
        }`}
      >
        <img src={heroImg} className="start__img" alt="imagen de sillas" />
      </picture>
      <div className="start__container">
        <h2
          className={`start__title ${
            !startParagraph ? "start__title--secondary" : ""
          }`}
        >
          {title}
        </h2>
        {startParagraph && <p className="start__paragraph">{paragraph}</p>}
      </div>
    </section>
  );
};

export default Start;
