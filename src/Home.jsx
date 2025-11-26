import About from "./About";
import ProjectList from "./ProjectList";

function Home() {

    const componentCards = [
        { component: <About/>, key: "about" },
        { component: <ProjectList/>, key: "projects" },
    ];

    return (
        <div>
            <div className="flex flex-col items-center w-screen space-y-6">
                {componentCards.map(({ component, key }) => (
                    <div key={key} className="w-full max-w-4xl px-4">
                        {component}
                    </div>
                ))}
                <p>Made with love by 
                    <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="px-1 hover:italic transition">
                    Sam Cabrera
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Home;
