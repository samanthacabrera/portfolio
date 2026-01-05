import { useEffect, useState } from "react";
import Loading from "./Loading";
import Controls from "./Controls";
import About from "./About";
import ProjectList from "./ProjectList";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 7000); 

        return () => clearTimeout(timer);
    }, []);

    const componentCards = [
        { component: <About/>, key: "about" },
        { component: <ProjectList/>, key: "projects" },
    ];

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Controls />
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <h1 className="text-xl md:text-2xl mb-2">
                    Welcome to Samoontha.com 
                </h1>
            </div>
            <div className="flex flex-col flex-grow justify-center mt-24">
                {componentCards.map(({ component, key }) => (
                    <div key={key}>
                        {component}
                    </div>
                ))}
            </div>
            <p className="relative bottom-2 left-1/2 -translate-x-1/2 text-center">Made with love by 
                <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="pl-2 hover:italic transition">
                Sam Cabrera
                </a>
            </p>
        </div>
    );
}

export default Home;
