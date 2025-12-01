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
            <Controls/>
            <div className="flex flex-grow flex-col items-center justify-center w-screen space-y-6 p-6">
                {componentCards.map(({ component, key }) => (
                    <div key={key} className="w-full max-w-xl">
                        {component}
                    </div>
                ))}
            </div>
            <p className="text-center">Made with love by 
                <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="pl-2 hover:italic transition">
                Sam Cabrera
                </a>
            </p>
        </div>
    );
}

export default Home;
