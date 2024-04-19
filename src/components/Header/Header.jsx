import logoutIcon from "/logo.svg";
import moon from "/moon.svg";
import { useEffect, useState } from "react";
import sun from "/sun.svg";
import "./Header.css";

const Header = ({ items }) => {
  const [headerTop, setHeader] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [headerColor, setHeaderColor] = useState("");

  const handleDivClick = () => {
    setIsChecked(!isChecked);
  };

  const handleWindowResize = () => {
    if (window.innerWidth >= 930) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    const modeToggle = document.getElementById("mode");
    let ubicacionPrincipal = window.pageYOffset;

    modeToggle.addEventListener("change", changeMode);
    checkDark();

    const handleScroll = () => {
      let ubicacionActual = window.pageYOffset;

      if (ubicacionPrincipal >= ubicacionActual) {
        setHeader("");
      } else {
        setHeader("header--top");
        setIsChecked(false);
      }

      0 == ubicacionActual
        ? setHeaderColor("")
        : setHeaderColor("header--color");

      ubicacionPrincipal = ubicacionActual;
    };

    function checkDark() {
      const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
      const userTheme = localStorage.getItem("theme");

      if (userTheme === "dark" || (!userTheme && darkTheme.matches)) {
        setUserTheme("dark");
      }

      darkTheme.addEventListener("change", function (e) {
        setUserTheme(e.matches ? "dark" : "light");
      });
    }

    function changeMode() {
      if (!modeToggle.checked) {
        setUserTheme("light");
      } else {
        setUserTheme("dark");
      }
    }

    function setUserTheme(newTheme) {
      document.documentElement.setAttribute("data-theme", newTheme);

      if (newTheme === "dark") {
        modeToggle.checked = true;
      } else {
        modeToggle.checked = false;
      }

      localStorage.setItem("theme", newTheme);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header id="header" className={`${headerTop} ${headerColor}`}>
      <div className="hero__container">
        <a
          className="hero__logo"
          href={import.meta.env.VITE_API}
          aria-label="Recargar pagina"
        >
          <img
            src={logoutIcon}
            alt="Logotipo del Portafolio MP"
            className="hero__img"
          />
          <h1 className="hero__title">
            <span className="hero__title--color">IFTS</span> 04&nbsp;
            <span className="hero__title--size">Apuntes</span>
          </h1>
        </a>
        <div className="hero__menu">
          <input
            type="checkbox"
            aria-label="menú de color"
            id="mode"
            className="hero__checkbox hero__checkbox--primary"
          />
          <label
            id="labelMode"
            htmlFor="mode"
            className="hero__label hero__label--primary"
          >
            <picture>
              <img
                className="hero__img--show"
                src={sun}
                alt="Ícono de modo oscuro"
              />
            </picture>
            <picture>
              <img
                className="hero__img--hidden"
                src={moon}
                alt="Ícono de modo claro"
              />
            </picture>
          </label>
          <input
            type="checkbox"
            aria-label="Menú de navegación"
            id="toggle"
            className="hero__checkbox hero__checkbox--secondary"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label
            id="labelToggle"
            htmlFor="toggle"
            className="hero__label hero__label--secondary"
            aria-label="Botón menú desplegable"
          >
            <span className="hero__icon"></span>
            <span className="hero__icon"></span>
            <span className="hero__icon"></span>
          </label>
          <nav className="hero__nav--mobile" onClick={handleDivClick}>
            <ul className="hero__items">
              {items.map(({ href, ariaLabel, alt, img, text }, index) => (
                <li key={index} className="hero__item">
                  <a href={href} aria-label={ariaLabel}>
                    <picture className="hero__picture">
                      <img src={img} alt={alt} />
                    </picture>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="hero__nav--desktop">
            <ul className="hero__items">
              {items.map(({ href, ariaLabel, text }, index) => (
                <li key={index} className="hero__item">
                  <a href={href} aria-label={ariaLabel}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
