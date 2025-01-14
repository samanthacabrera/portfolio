import React from 'react';
import Background from './utils/Background';
import Navbar from './components/Navbar';
import Home from './pages/homepage/Home';
import ProjectPage from './pages/projectpage/ProjectPage';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import './styles/app.css';
import About from './pages/homepage/About';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
