import React from "react";
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './ProjectsList';
import Blog from "./Blog";
import Resume from "./Resume";
import About from "./About";

function Home() {
    return (
        <section className="flex flex-col items-center">
            <Hero />
            <div className="w-2/3">
                <Intro />
                <Skills />
                <Projects />
                <Blog />
                <Resume />
                <About/>
            </div>
        </section>
    )
}

export default Home