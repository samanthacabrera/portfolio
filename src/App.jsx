import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/homepage/Home';
import ProjectPage from './pages/projectpage/ProjectPage';
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
