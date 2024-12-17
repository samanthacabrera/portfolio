import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/homepage/Home';
import ProjectPage from './pages/projectpage/ProjectPage';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  return (
    <Router>
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
