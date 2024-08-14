import React from "react";
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import ProjectsList from './ProjectsList';
import Blog from "./Blog";

function Home() {
    return (
        <section className="flex flex-col items-center">
            <div className="w-2/3 space-y-10 md:space-y-48">
                <Hero/>
                <Intro />
                <ProjectsList />
                <Skills />
                <Blog />
            </div>
        </section>
    )
}

export default Home