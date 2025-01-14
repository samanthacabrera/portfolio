import React from "react";
import Hero from "./Hero";
import Room from "../../components/Room";

function Home() {
    return (
        <div className="flex flex-col w-screen justify-center items-center"
        >
            <Hero />
            <Room /> 
        </div>
    );
}

export default Home;
