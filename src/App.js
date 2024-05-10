import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Welcome from './Welcome';
import Skills from './Skills';
import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';
import AboutMe from './AboutMe';
import QandA from './Questions';
import Inspo from './Inspo';
import './tailwind.css';
import './index.css';



function App() {
  return (
    <Router>
      <section className="parallax text-center bg-fixed bg-cover text-opacity-65 bg-opacity-65 text-yellow-200 bg-blue-900">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <>
              <Home />
              <Welcome />
              <Intro />
              <Projects />
              <Skills />
              <Blog />
            </>
          </Route>
          <Route path="/about">
            <>
              <AboutMe />
              <QandA />
              <Inspo />
            </>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App


