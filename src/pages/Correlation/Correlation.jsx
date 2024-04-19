import {
  classicIcons,
  classicPrivateIcons,
} from "../../components/Header/headerInfo.js";
import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import SubjectMap from "../../components/SubjectMap/SubjectMap";
import Legend from "../../components/Legend/Legend";
import { useAuthContext } from "../../context/AuthContext.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Correlation = () => {
  const { isAuthenticated } = useAuthContext();
  const icons = isAuthenticated ? classicPrivateIcons : classicIcons;

  return (
    <>
      <Header items={icons} />
      <main>
        <Start title={"Materias"} />
        {isAuthenticated && <Legend />}
        <SubjectMap />
      </main>
      <Footer />
    </>
  );
};

export default Correlation;
