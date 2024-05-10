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
      <section className="parallax">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="md:px-[10rem] md:py-[20rem] py-[15rem] px-2">
              <Home />
              <Welcome />
              <Intro />
              <Projects />
              <Skills />
              <Blog />
            </div>
          </Route>
          <Route path="/about">
            <div className="md:px-[10rem] md:py-[20rem] py-[15rem] px-2">
              <AboutMe />
              <QandA />
              <Inspo />
            </div>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App


