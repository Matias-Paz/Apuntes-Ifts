// import { useAuthContext } from "../../context/AuthContext";
import "./ClassToday.css";

const ClassToday = ({ img, alt, title, teacher, horary, href }) => {
  // const { isAuthenticated } = useAuthContext();

  return (
    <div className="classToday">
      <div className="classToday__title">
        <picture className="card__picture">
          <img className="card__img" src={img} alt={alt} />
        </picture>
        <div className="classToday__class">
          <h4>{title}</h4>
          <p>
            con {teacher} ({horary}).
          </p>
        </div>
      </div>
      {/* {isAuthenticated && (
        <a
          className="classToday__link"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          Unirse con Google Meet
        </a>
      )} */}
    </div>
  );
};

export default ClassToday;
