import loadingCat from "/loadingCat.png";
import danceCat from "/danceCat.gif";
import "./Loading.css";

function Loading() {
  return (
    <main className="loading">
      <img
        className="loading__img"
        src={loadingCat}
        alt="Imagen de carga gato fantasma"
      />
      <img
        className="loading__img--dance"
        src={danceCat}
        alt="Imagen de carga gato bailando"
      />
    </main>
  );
}

export default Loading;
