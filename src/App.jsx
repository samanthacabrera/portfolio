import React from 'react';
import { Routes, Route } from "react-router-dom";
import Background from './utils/Background';
import Navbar from './components/Navbar';
import Home from './pages/homepage/Home';
import About from './pages/homepage/About';
import Projects from './pages/homepage/ProjectsList';
import ProjectPage from './pages/projectpage/ProjectPage';
import Services from './pages/homepage/Services';
import Articles from './pages/homepage/Articles';
import Footer from './components/Footer';
import './styles/app.css';


function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
