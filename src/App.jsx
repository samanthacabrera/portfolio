import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Footer from './utils/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
