import CalendarSection from "../../components/CalendarSection/CalendarSection";
import {
  classicIcons,
  classicPrivateIcons,
} from "../../components/Header/headerInfo.js";
import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import Legend from "../../components/Legend/Legend";
import { useAuthContext } from "../../context/AuthContext";
import Footer from "../../components/Footer/Footer";

const Calendar = () => {
  const { isAuthenticated } = useAuthContext();
  const icons = isAuthenticated ? classicPrivateIcons : classicIcons;

  return (
    <>
      <Header items={icons} />
      <main>
        <Start
          title={"Calendario"}
          startParagraph={true}
          paragraph={
            "Encuentra fácilmente fechas importantes y eventos en nuestro calendario universitario"
          }
        />
        {isAuthenticated && <Legend />}

        <CalendarSection />
      </main>
      <Footer />
    </>
  );
};

export default Calendar;
