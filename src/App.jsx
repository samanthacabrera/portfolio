import React from 'react';
import { Routes, Route } from "react-router-dom";
import Background from './utils/Background';
import Home from './pages/homepage/Home';
import ProjectPage from './pages/projectpage/ProjectPage';
import Footer from './components/Footer';
import './styles/app.css';


function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
