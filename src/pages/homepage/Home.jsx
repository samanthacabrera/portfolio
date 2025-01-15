import React from "react";
import Hero from "./Hero";
import Room from "../../components/Room";

function Home() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center overflow-hidden"
        >
            <Hero />
            <Room /> 
        </div>
    );
}

export default Home;
