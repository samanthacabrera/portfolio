import React from "react";
import Hero from './Hero';
import Skills from './Skills';
import Intro from './Intro';

function Home() {
    return (
        <section className="flex flex-col items-center">
            <Hero />
            <div className="w-2/3">
                <Intro />
                <Skills />
            </div>
        </section>
    )
}

export default Home