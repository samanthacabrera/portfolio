import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import './App.css';
import './tailwind.css';
import './index.css';


function App() {
  return (
    <Router>
<<<<<<< HEAD
      <section className="parallax text-center bg-fixed bg-cover">
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
=======
      <div className="parallax">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <>
              <div className="md:px-[10rem] md:py-[20rem] py-[15rem] px-2">
                <Home/>
                <Welcome/>
                <Intro/>
                <PyFlows/>
                <Skills/>
                <Blog/>
              </div>
            </>
          </Route>
          <Route path="/about">
            <div className="md:px-[10rem] md:py-[20rem] py-[15rem] px-2">
              <AboutMe/>
              <QandA/>
              <Inspo/>
            </div>
>>>>>>> fcfdafb9507fc833128dd730cbcb1184a57607c5
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App


