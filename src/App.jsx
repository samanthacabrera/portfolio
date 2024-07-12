import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProgressBar from './Progress';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import About from './About';
import './tailwind.css';
import './index.css';

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("keydown", function (event) {
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });
  });

  return (
    <Router>
      <ProgressBar />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
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
    </Router >
  );
}

export default App


