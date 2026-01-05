import About from "./About";
import ProjectList from "./ProjectList";
import Controls from "./Controls";

function Home() {

    const componentCards = [
        { component: <About/>, key: "about" },
        { component: <ProjectList/>, key: "projects" },
    ];

    return (
        <div>
            <Controls />
            <div className="title relative text-center pb-12">
                <p className="text-xl md:text-2xl mb-2">
                    Welcome to
                </p>
                <h1 className="text-4xl md:text-4xl tracking-wide">
                    SAMOONTHA.COM
                </h1>
            </div>
            <div className="flex flex-col flex-grow justify-center">
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
