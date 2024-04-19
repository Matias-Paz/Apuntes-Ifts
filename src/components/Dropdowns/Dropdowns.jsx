import arrowDown from "/arrow-down.png";
import arrowUp from "/arrow-up.png";
import "./Dropdowns.css";

const Dropdowns = ({ links, page }) => {
  return (
    <div className="dropdown">
      <input
        className="dropdown__checkbox dropdown__checkbox--none"
        type="checkbox"
        id="dropdownMenu"
      />
      <label className="dropdown__menu" htmlFor="dropdownMenu">
        <span className="dropdown__title">Temas</span>
        <span className="dropdown__icon dropdown__icon--hidden">
          <img src={arrowDown} alt="flecha de abajo" />
        </span>
        <span className="dropdown__icon dropdown__icon--show">
          <img src={arrowUp} alt="flecha de arriba" />
        </span>
      </label>
      <div className="dropdown__content">
        <div className="dropdown__info">
          <ul className="dropdown__lists">
            {links.map(({ title, id }, index) => (
              <li key={index} className="dropdown__list">
                <a href={`${page}#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
