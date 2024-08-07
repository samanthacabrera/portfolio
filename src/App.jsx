import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProgressBar from './Progress';
import Background from './Background';
import Navbar from './Navbar';
import Home from './Home';
import ProjectPage from './ProjectPage';
import Footer from './Footer';
import './tailwind.css';
import './index.css';

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
