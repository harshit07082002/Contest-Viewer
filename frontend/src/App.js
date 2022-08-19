import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Loader from "./utils/Loader";
const ContestPage = React.lazy(() => import("./pages/ContestPage"));
const Error = React.lazy(() => import("./utils/Error"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/contests" replace />} />
            <Route path="/contests" element={<ContestPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Error error={"No Page Found"} />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
