import React from "react";
import Hero from './Hero';
import Intro from './Intro';
import ProjectsList from './ProjectsList';
import Blog from "./Blog";
import Contact from "./Contact";

function Home() {
    return (
        <section className="flex flex-col items-center">
            <div className="w-2/3 space-y-10 md:space-y-48">
                <Hero/>
                <Intro />
                <ProjectsList />
                <Blog />
                <Contact/>
            </div>
        </section>
    )
}

export default Home