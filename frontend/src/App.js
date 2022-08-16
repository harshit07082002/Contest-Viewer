import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContestPage from "./pages/ContestPage";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/contests" replace />} />
          <Route path="/contests" element={<ContestPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
