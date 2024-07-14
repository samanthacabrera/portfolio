import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProgressBar from './Progress';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import About from './About';
import Background from './Background'; 
import './tailwind.css';
import './index.css';

function App() {
  return (
    <Router>
      <Background /> 
      <ProgressBar />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
