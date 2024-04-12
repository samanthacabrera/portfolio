import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Demos from './Demos';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
// import Cat from './Cat'
import Toggle from './Toggle';
import Footer from './Footer';
import './App.css';
import './tailwind.css';
import './index.css';


function App() {
  const contentRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Update background
    contentRef.current.style.backgroundImage = isDarkMode
      ? 'linear-gradient(#09010da7, rgba(50, 4, 72, 0.397))'
      : 'linear-gradient(#d8c30ba7, rgba(18, 222, 147, 0.388))';
    // Update text color 
    contentRef.current.style.color = isDarkMode ? 'whitesmoke' : 'black';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
return (
    <Router>
    <div ref={contentRef} className="parallax"> 
      <Navbar />
      <Toggle onToggle={toggleDarkMode}/>
        <Switch>
          <Route exact path="/">
          <>
            <Home />
            <section>
              <About />
            </section>
            <section>
              <Portfolio />
            </section>
            <section>
              <Skills />
            </section>  
            <section>
              <Demos />
            </section>
            <section>
            <Blog />
            </section> 
            {/* <section>
            <Cat />
            </section>  */}
            </>
          </Route>
           <Route path='/demos'>
            <Demos />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          {/* <Route path="/cat">
            <Cat />
          </Route> */}
        </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App






