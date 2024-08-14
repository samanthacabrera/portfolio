import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProgressBar from './utils/ProgressBar';
import Background from './utils/Background';
import Navbar from './components/Navbar';
import Home from './pages/homepage/Home';
import ProjectPage from './pages/projectpage/ProjectPage';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <Router>
      <ProgressBar />
      <Background/>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/:id">
          <ProjectPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
