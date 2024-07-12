import React from "react";
import Background from './Background';
import Hero from './Hero';
import Skills from './Skills';
import Intro from './Intro';

function Home() {
    return (
        <section className="flex flex-col items-center">
            <Hero />
            <div className="w-2/3">
                <Background />
                <Intro />
                <Skills />
            </div>
        </section>
    )
}

export default Home