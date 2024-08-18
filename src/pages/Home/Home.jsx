import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import Notes from "../../components/Notes/Notes";
import DiscordInvitation from "../../components/DiscordInvitation/DiscordInvitation";
import StartPublic from "../../components/StartPublic/StartPublic.jsx";
import {
  classicIcons,
  classicPrivateIcons,
} from "../../components/Header/headerInfo.js";
import Footer from "../../components/Footer/Footer.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";

const Home = () => {
  const { isAuthenticated } = useAuthContext();
  const icons = isAuthenticated ? classicPrivateIcons : classicIcons;

  return (
    <>
      <Header items={icons} />
      <main>
        <Start
          title={"Bienvenido"}
          startParagraph={true}
          paragraph={"¡La búsqueda de apuntes perfectos termina aquí!"}
        />
        {isAuthenticated ? <Notes /> : <StartPublic />}
      </main>
      <DiscordInvitation />
      <Footer />
    </>
  );
};

export default Home;
