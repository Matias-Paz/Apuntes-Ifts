import Start from "../../components/Start/Start";
import Header from "../../components/Header/Header.jsx";
import {
  createIconPrimary,
  createIconRecord,
  createIconSecondary,
} from "../../utils/createIcons.js";
import "../../ClassSubjects.css";
import Error from "../Error/Error";
import PreviousAndNextLink from "../../components/PreviousAndNextLink/PreviousAndNextLink";
import Class1 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass1";
import Class2 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass2";
import Class3 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass3";
import Class4 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass4";
import Class5 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass5";
import Class6 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass6";
import Class7 from "./ProgrammingTechniquesClass/ProgrammingTechniquesClass7.jsx";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";

// Configuración de las clases fuera del componente para evitar recreaciones innecesarias
const classProgrammingTechniquesDefault = "Ocurrió un error";
const classesTechniques = {
  1: Class1,
  2: Class2,
  3: Class3,
  4: Class4,
  5: Class5,
  6: Class6,
  7: Class7,
};

// Mapeo de íconos simplificado
const iconFunctions = {
  default: createIconRecord,
  // default: createIconPrimary,
  1: createIconPrimary,
  // 2: createIconPrimary,
  3: createIconSecondary,
};

const ProgrammingTechniques = () => {
  let { id } = useParams();

  const numericId = parseInt(id, 10);
  const subjectName = "tecnica";
  const page = `${subjectName}/${id}`;
  const nameClass = `Clase ${id}`;

  const minId = 1;
  const maxId = Object.keys(classesTechniques).length;
  const isFirstClass = numericId === minId;
  const isLastClass = numericId === maxId;

  const techniqueIcon = (iconFunctions[numericId] || iconFunctions.default)(
    page
  );
  const ClassComponent = classesTechniques[numericId];

  if (isNaN(numericId) || numericId < 1 || numericId > maxId) {
    return <Error />;
  }

  return (
    <>
      <Header items={techniqueIcon} />
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
          classProgrammingTechniquesDefault
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProgrammingTechniques;
