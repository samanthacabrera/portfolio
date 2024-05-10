import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Hero from './Hero';
import Welcome from './Welcome';
import Skills from './Skills';
import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';
import Bio from './Bio';
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
            <Hero />
            <Welcome />
            <Intro />
            <Projects />
            <Skills />
            <Blog />
          </Route>
          <Route path="/about">
            <Bio />
            <QandA />
            <Inspo />
          </Route>
        </Switch>
      </section>
    </Router >
  );
}

export default App


