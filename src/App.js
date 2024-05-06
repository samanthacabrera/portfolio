import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Scroll from './Welcome';
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
      <Navbar />
        <Switch>
          <Route exact path="/">
          <>
            <Home />
            <section>
              <Scroll />
            </section>
            <section>
              <Intro />
            </section>
            <section>
              <PyFlows/>
            </section>
            <section>
              <Skills />
            </section> 
            <section>
               <Blog />
            </section>  
            </>
          </Route>
          <Route path="/about">
            <section>
              <AboutMe/>
            </section>
            <section>
              <QandA/>
            </section>
            <section>
              <Inspo/>
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App


