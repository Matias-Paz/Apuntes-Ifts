import "./Footer.css";
import logoutIcon from "/logo.svg";
import iconMap from "/icon-map.png";
import iconPhone from "/icon-phone.png";
import iconEmail from "/icon-email.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footerLogo">
          <a className="footerLogo__container" href={import.meta.env.VITE_API}>
            <picture className="footer__picture">
              <img
                src={logoutIcon}
                alt="Logotipo del Portafolio MP"
                className="hero__img"
              />
            </picture>
            <h2 className="footer__title">
              IFTS <span className="footer__title--color">04</span>
              <span className="footer__title--size">Apuntes</span>
            </h2>
          </a>
        </div>
        <div className="footer__content">
          <div>
            <div className="footer__contact">
              <h3>Contacto de la institución</h3>

              <ul className="footer__list">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Murguiondo+2105,+C1440CNU+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6584721,-58.5021768,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc905aeb83d67:0x12bc85745b6e35ae!8m2!3d-34.6584765!4d-58.4996019!16s%2Fg%2F11h4cgg8g0?entry=ttu"
                    target="_blank"
                    rel="noopener noopener"
                    className="footer__link"
                  >
                    <img src={iconMap} alt="icono de mapa" />
                    Murguiondo 2105, Mataderos, CABA
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+541146872400"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="footer__link"
                  >
                    <img src={iconPhone} alt="icono de celular" />
                    +54 11 4687-2400
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bedelesifts4@gmail.com"
                    className="footer__link"
                  >
                    <img src={iconEmail} alt="icono de celular" />
                    bedelesifts4@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:asesoriapedagogicaifts4@gmail.com"
                    className="footer__link"
                  >
                    <img src={iconEmail} alt="icono de celular" />
                    asesoriapedagogicaifts4@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        className="footer__copyright"
        href="https://matias-paz.netlify.app/#start"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="connect with Matías' github"
      >
        &copy;{" "}
        {`${new Date().getFullYear()} - 
        Developed with ❤ by`}{" "}
        <span>&nbsp;{`<Matias Paz />`}</span>
      </a>
    </footer>
  );
};

export default Footer;
