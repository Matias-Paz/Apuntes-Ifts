import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import Legend from "../../components/Legend/Legend";
import RecordingElement from "../../components/RecordingElement/RecordingElement.jsx";
import { classicPrivateIcons } from "../../components/Header/headerInfo.js";
import Footer from "../../components/Footer/Footer.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";

function Recording() {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      <Header items={classicPrivateIcons} />
      <main>
        <Start
          title={"Grabaciones"}
          startParagraph={true}
          paragraph={
            "Acceso a grabaciones de clases universitarias de los temas tratados en cualquier momento."
          }
        />
        {isAuthenticated && <Legend />}
        {isAuthenticated && <RecordingElement />}
      </main>
      <Footer />
    </>
  );
}

export default Recording;
