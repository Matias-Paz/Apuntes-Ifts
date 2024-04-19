import PreviousAndNextLink from "../../components/PreviousAndNextLink/PreviousAndNextLink";
import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import { useParams } from "react-router-dom";
import {
  createIconRecord,
  createIconSecondary,
  createIconTertiary,
} from "../../utils/createIcons.js";
import Error from "../Error/Error";
import Class1 from "./DataBaseClass/DataBaseClass1";
import Class2 from "./DataBaseClass/DataBaseClass2";
import Class3 from "./DataBaseClass/DataBaseClass3";
import "../../ClassSubjects.css";
import Footer from "../../components/Footer/Footer.jsx";

const classDataBasePageDefault = "Ocurrio un error";
const classesDataBase = {
  1: Class1,
  2: Class2,
  3: Class3,
};

const iconFunctions = {
  1: createIconSecondary,
  2: createIconTertiary,
  default: createIconRecord,
};

const DataBasePage = () => {
  let { id } = useParams();

  const numericId = parseInt(id, 10);
  const subjectName = "datos";
  const page = `${subjectName}/${id}`;
  const nameClass = `Clase ${id}`;

  const minId = 1;
  const maxId = Object.keys(classesDataBase).length;
  const isFirstClass = numericId === minId;
  const isLastClass = numericId === maxId;

  const dataIcon = (iconFunctions[numericId] || iconFunctions.default)(page);
  const ClassComponent = classesDataBase[numericId];

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
          classDataBasePageDefault
        )}
      </main>
      <Footer />
    </>
  );
};

export default DataBasePage;
