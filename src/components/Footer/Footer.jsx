import "./Footer.css";
import logoutIcon from "/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__logo" href="https://apuntesifts.netlify.app/">
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
        <div className="footer__text">
          <p>Domicilio: Murguiondo 2105, Mataderos, CABA</p>
          <p>Código Postal: C1440CNT</p>
        </div>
      </div>
      <a
        className="footer__copyright"
        href="https://matias-paz.netlify.app/#start"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="connect with Matías' github"
      >
        &copy; {`${new Date().getFullYear()} - Diseñado con ❤ por`}{" "}
        <span>&nbsp;Matias Paz</span>
      </a>
    </footer>
  );
};

export default Footer;
