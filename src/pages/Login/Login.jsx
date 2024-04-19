import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { USER_NAME, USER_PASSWORD } from "../../consts/consts.js";
import loginImg from "/login-img.webp";
import iconPassword from "/icon-password.webp";
import iconCorrect from "/icon-correct.png";
import iconIncorrect from "/icon-incorrect.png";
import iconUser from "/icon-user.webp";
import "./Login.css";

export function Login() {
  const { login } = useAuthContext();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isUsername, setIsUsername] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsPassword(password === USER_PASSWORD);
    setIsUsername(username === USER_NAME);
    if (username !== USER_NAME || password !== USER_PASSWORD) {
      setText("El usuario o la contraseña son incorrectos");
    } else {
      setText("El usuario y la contraseña son correctos");
      login(); // Aquí podrías llamar a la función de inicio de sesión si es necesario
    }
  };

  return (
    <section className="login">
      <img className="login__img" src={loginImg} alt="fondo de universidad" />
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__title">
            <h1>
              Hola, <span>bienvenido!</span>
            </h1>
            <h2>Iniciar sección</h2>
          </div>
          <div className="login__inputs">
            <div className="login__input">
              <img
                className="login__input-img"
                src={iconUser}
                alt="icono de usuario"
              />

              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="Nombre de usuario"
              />

              <img
                className={`
                login__icon login__icon--correct
                ${isUsername ? "login__icon--opacity" : ""}`}
                src={iconCorrect}
                alt="icono de nombre correcto"
              />
              <img
                className={`
              login__icon login__icon--incorrect
              ${isUsername === false ? "login__icon--opacity" : ""}`}
                src={iconIncorrect}
                alt="icono de nombre incorrecto"
              />
            </div>
            <div className="login__input">
              <img
                className="login__input-img login__input-img--password"
                src={iconPassword}
                alt="icono de contraseña"
              />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña de usuario"
                autoComplete="current-password"
              />

              <img
                className={`
                login__icon login__icon--correct
                ${isPassword ? "login__icon--opacity" : ""}`}
                src={iconCorrect}
                alt="icono de nombre correcto"
              />
              <img
                className={`
              login__icon login__icon--incorrect
              ${isPassword === false ? "login__icon--opacity" : ""}`}
                src={iconIncorrect}
                alt="icono de contraseña incorrecto"
              />
            </div>
            <label className="login__label">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              Mostrar contraseña
            </label>
            <div className="login__button-container">
              <p className="login__message">{text}</p>

              <button type="submit" className="login__button">
                Iniciar sesión
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
