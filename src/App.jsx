import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
