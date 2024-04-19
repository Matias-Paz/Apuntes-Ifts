import PreviousAndNextLink from "../../components/PreviousAndNextLink/PreviousAndNextLink";
import Start from "../../components/Start/Start";
import Header from "../../components/Header/Header";
import Error from "../Error/Error";
import {
  createIconPrimary,
  createIconRecord,
} from "../../utils/createIcons.js";
import Class1 from "./ComputationalLogic/ComputationalLogic1";
import Class2 from "./ComputationalLogic/ComputationalLogic2";
import { useParams } from "react-router-dom";
import "../../ClassSubjects.css";
import Footer from "../../components/Footer/Footer.jsx";

const classComputationalLogicsDefault = "Ocurrio un error";

const classComponents = {
  1: Class1,
  2: Class2,
};

const iconFunctions = {
  1: createIconPrimary,
  default: createIconRecord,
};

const ComputationalLogic = () => {
  let { id } = useParams();

  const numericId = parseInt(id, 10);
  const subjectName = "logica";
  const page = `${subjectName}/${id}`;
  const nameClass = `Clase ${id}`;

  const minId = 1;
  const maxId = Object.keys(classComponents).length;
  const isFirstClass = numericId === minId;
  const isLastClass = numericId === maxId;

  const dataIcon = (iconFunctions[numericId] || iconFunctions.default)(page);
  const ClassComponent = classComponents[numericId];

  if (isNaN(numericId) || numericId < minId || numericId > maxId) {
    return <Error />;
  }

  return (
    <>
      <Header items={dataIcon} />
      <Start title={nameClass} />
      <PreviousAndNextLink
        number={numericId}
        name={subjectName}
        previous={!isFirstClass}
        next={!isLastClass}
      />
      <main>
        {ClassComponent ? (
          <ClassComponent numericId={numericId} />
        ) : (
          classComputationalLogicsDefault
        )}
      </main>
      <Footer />
    </>
  );
};

export default ComputationalLogic;
