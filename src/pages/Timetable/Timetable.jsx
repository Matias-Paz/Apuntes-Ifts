import TimetableText from "../../components/TimetableText/TimetableText";
import {
  classicIcons,
  classicPrivateIcons,
} from "../../components/Header/headerInfo.js";
import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import { useAuthContext } from "../../context/AuthContext.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Timetable = () => {
  const { isAuthenticated } = useAuthContext();
  const icons = isAuthenticated ? classicPrivateIcons : classicIcons;

  return (
    <>
      <Header items={icons} />
      <main>
        <Start title={"Horarios"} />
        <TimetableText />
      </main>
      <Footer />
    </>
  );
};

export default Timetable;
