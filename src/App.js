import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Welcome from './Welcome';
import Skills from './Skills';
import Intro from './Intro';
import Blog from './Blog';
import AboutMe from './AboutMe';
import './App.css';
import './tailwind.css';
import './index.css';
import PyFlows from './PyFlows';
import QandA from './Questions';
import Inspo from './Inspo';


function App() {
  return (
    <Router>
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App


