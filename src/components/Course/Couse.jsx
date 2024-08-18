import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import { classicPrivateIcons } from "../../components/Header/headerInfo.js";
import {
  cardsBase,
  cardsCoding,
  cardsLogic,
  cardsMath,
} from "../Notes/cardsInfo.js";
import Footer from "../../components/Footer/Footer";
import Slider from "../Slider/Slider.jsx";
import "./Couse.css";

const Couse = ({ titlePrimary, titleSecondary, cardName }) => {
  const cardMap = {
    cardsBase,
    cardsCoding,
    cardsLogic,
    cardsMath,
  };

  const card = cardMap[cardName] || cardsBase;

  return (
    <>
      <Header items={classicPrivateIcons} />
      <main>
        <Start title={titlePrimary} />
      </main>
      <section className="couse container" id="course">
        <Slider title={titleSecondary} cards={card} />
      </section>

      <Footer />
    </>
  );
};

export default Couse;
