import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loading from "./components/Loading/Loading";
import Error from "./pages/Error/Error";
import "./ClassSubjects.css";
import "./App.css";
import {
  CALENDAR,
  CORRELATIVIDADES,
  DATABASE,
  HOME,
  HOMEPRIVATE,
  LOGIC,
  LOGIN,
  MATH,
  PRIVATE,
  RECORDING,
  SCHEDULE,
  TECHNIQUE,
} from "./config/paths";
import Login from "./pages/Login/Login";
import Recording from "./pages/Recording/Recording";
import { AuthContextProvider } from "./context/AuthContext";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";

// Componentes para carga diferida con React.lazy
// const Video = React.lazy(() => import("./pages/Video/Video.jsx"));
const Calendar = React.lazy(() => import("./pages/Calendar/Calendar"));
const Correlation = React.lazy(() => import("./pages/Correlation/Correlation"));
const Timetable = React.lazy(() => import("./pages/Timetable/Timetable"));
const ComputationalLogic = React.lazy(() =>
  import("./pages/ComputationalLogic/ComputationalLogic")
);
const ProgrammingTechniques = React.lazy(() =>
  import("./pages/ProgrammingTechniques/ProgrammingTechniques")
);
const DataBasePage = React.lazy(() =>
  import("./pages/DataBasePage/DataBasePage")
);
const MathematicalAnalysis = React.lazy(() =>
  import("./pages/MathematicalAnalysis/MathematicalAnalysis")
);

const App = () => {
  console.log(" /\\_/\\");
  console.log("( o.o )");
  console.log(" > ^ <");
  console.log("%c¡Bienvenido a mi página web!", " font-size: 18px;");

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route index path={HOME} element={<Home />} />
              <Route path={LOGIN} element={<Login />} />
            </Route>
            <Route path={PRIVATE} element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path={HOMEPRIVATE} element={<Home />} />
              <Route path={`${LOGIC}/:id`} element={<ComputationalLogic />} />
              <Route
                path={`${TECHNIQUE}/:id`}
                element={<ProgrammingTechniques />}
              />
              <Route path={`${DATABASE}/:id`} element={<DataBasePage />} />
              <Route path={`${MATH}/:id`} element={<MathematicalAnalysis />} />
              <Route path={RECORDING} element={<Recording />} />
              {/* <Route path={`${RECORDING}:id`} element={<RecordingElement />} /> */}
            </Route>
            <Route path={CALENDAR} element={<Calendar />} />
            <Route path={CORRELATIVIDADES} element={<Correlation />} />
            <Route path={SCHEDULE} element={<Timetable />} />
            {/* <Route path={VIDEO} element={<Video />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
