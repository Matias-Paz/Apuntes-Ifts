import { PRIVATE } from "../../config/paths";
import "./PreviousAndNextLink.css";

const PreviousAndNextLink = ({ name, number, next, previous }) => {
  return (
    <section className="link__container">
      <a
        className={`link__arrow ${previous ? "" : "link__arrow--opacity"}`}
        href={`${import.meta.env.VITE_API}${PRIVATE}/${name}/${
          number - 1
        }#start`}
      >
        <svg
          className="link__arrowIcon"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490 490"
          xmlSpace="preserve"
        >
          <g>
            <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507" />
          </g>
        </svg>
        <p>Anterior clase</p>
      </a>
      <a
        className={`link__arrow ${next ? "" : "link__arrow--opacity"}`}
        href={`${import.meta.env.VITE_API}${PRIVATE}/${name}/${
          number + 1
        }#start`}
      >
        <p>Siguiente clase</p>
        <svg
          className="link__arrowIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </a>
    </section>
  );
};

export default PreviousAndNextLink;
