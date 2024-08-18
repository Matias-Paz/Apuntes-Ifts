import "./Footer.css";
import logoutIcon from "/logo.svg";
import iconMap from "/icon-map.png";
import iconInstagram from "/icon-instagram.svg";
import iconReloj from "/icon-reloj.png";
// import iconPhone from "/icon-phone.png";
import iconEmail from "/icon-email.png";

const Footer = () => {
  return (
    <>
      <iframe
        className="footer__iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.850747571989!2d-58.50217682557121!3d-34.6584720603897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc905aeb83d67%3A0x12bc85745b6e35ae!2sMurguiondo%202105%2C%20C1440CNU%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1719155417537!5m2!1ses!2sar"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <footer className="footer">
        <div className="footer__container">
          {/* <div className="footer__content"> */}
          {/* <div className="footer__contacts"> */}
          <div className="footerLogo">
            <a
              className="footerLogo__container"
              href={import.meta.env.VITE_API}
            >
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
          <div className="footer__contactContent">
            <div className="footer__contact">
              <h3>Localización</h3>
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
              </ul>
            </div>
            <div className="footer__contact">
              <h3>Horario de atención</h3>
              <ul className="footer__list">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Murguiondo+2105,+C1440CNU+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6584721,-58.5021768,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc905aeb83d67:0x12bc85745b6e35ae!8m2!3d-34.6584765!4d-58.4996019!16s%2Fg%2F11h4cgg8g0?entry=ttu"
                    target="_blank"
                    rel="noopener noopener"
                    className="footer__link"
                  >
                    <img src={iconReloj} alt="icono de mapa" />
                    Lunes a Viernes de 18:00 a 22:00 hs
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__contact">
              <h3>Contacto de la institución</h3>
              <ul className="footer__list">
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
    </>
  );
};

export default Footer;
