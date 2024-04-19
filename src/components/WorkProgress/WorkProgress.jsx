import iconWork from "/cat-work.webp";
import "./WorkProgress.css";

const WorkProgress = () => {
  return (
    <section className="workProgress">
      <img src={iconWork} alt="icon de trabajo en progreso" />
      <div className="workProgress__text">
        <h3>¡Oops! Parece que te has adelantado un poco</h3>
        <p>
          La página web está actualmente en desarrollo, por eso faltan apuntes.
          Mientras tanto, algunos apuntes podrían estar pendientes ya que el
          desarrollador está concentrado en los parciales.
        </p>
      </div>
    </section>
  );
};

export default WorkProgress;
