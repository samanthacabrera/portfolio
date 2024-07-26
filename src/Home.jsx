import React from "react";
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './ProjectsList'
import Blog from "./Blog";
import Resume from "./Resume";

function Home() {
    return (
        <section className="flex flex-col items-center">
            <Hero />
            <div className="w-2/3">
                <Intro />
                <Skills />
                <Projects />
                <Blog />
                <Resume/>
            </div>
        </section>
    )
}

export default Home