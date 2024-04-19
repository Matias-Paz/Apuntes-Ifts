import { useState, useEffect, useRef } from "react";
import "./Slider.css";

const Slider = ({ img, alt, title, cards }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startScrollLeft, setStartScrollLeft] = useState(null);
  const carouselRef = useRef(null);
  const beforeBtnRef = useRef(null);
  const afterBtnRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselChildren = [...carousel.children];
    const firstCardWidth = carouselChildren[0].offsetWidth;

    const handleArrowClick = direction => {
      carousel.scrollLeft +=
        direction === "before" ? -firstCardWidth : firstCardWidth;
    };

    const handleDragStart = e => {
      setIsDragging(true);
      carousel.classList.add("slider__carousel--dragging");
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const handleDragging = e => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const handleDragStop = () => {
      setIsDragging(false);
      carousel.classList.remove("slider__carousel--dragging");
    };

    carousel.addEventListener("mousedown", handleDragStart);
    carousel.addEventListener("mousemove", handleDragging);
    document.addEventListener("mouseup", handleDragStop);

    beforeBtnRef.current.addEventListener("click", () =>
      handleArrowClick("before")
    );
    afterBtnRef.current.addEventListener("click", () =>
      handleArrowClick("after")
    );

    return () => {
      carousel.removeEventListener("mousedown", handleDragStart);
      carousel.removeEventListener("mousemove", handleDragging);
      document.removeEventListener("mouseup", handleDragStop);
      beforeBtnRef.current.removeEventListener("click", () =>
        handleArrowClick("before")
      );
      afterBtnRef.current.removeEventListener("click", () =>
        handleArrowClick("after")
      );
    };
  }, [isDragging, startX, startScrollLeft]);

  return (
    <>
      <div className="card__title">
        <picture className="card__picture">
          <img loading="lazy" className="card__img" src={img} alt={alt} />
        </picture>
        <h3 className="subtitle">{title}</h3>
      </div>
      <div className="slider">
        <div className="slider__cards">
          <ul className="slider__carousel" ref={carouselRef}>
            {cards.map(({ disable, title, teacher, date, link }, index) => (
              <li
                key={index}
                className={`slider__card ${
                  disable ? "slider__card--disable" : ""
                }`}
              >
                <div className="slider__content">
                  <div className="slider__text">
                    <h4 className="slider__title">{title}</h4>
                    {teacher !== "María Alicia Piñeiro" &&
                    teacher !== "Graciela Medici" ? (
                      <p className="slider__paragraph">Profesor: {teacher}</p>
                    ) : (
                      <p className="slider__paragraph">Profesora: {teacher}</p>
                    )}
                    <p className="slider__paragraph">{date}</p>
                  </div>
                  <div className="cta__container cta--bottom">
                    {disable ? (
                      <p className="cta cta--disable">Detalles</p>
                    ) : (
                      <a className="cta" href={link}>
                        Detalles
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="slider__arrow" ref={beforeBtnRef}>
          <svg
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
        </div>
        <div className="slider__arrow" ref={afterBtnRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Slider;
