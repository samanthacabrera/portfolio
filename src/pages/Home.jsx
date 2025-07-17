import About from "./About";
import ProjectList from "./ProjectList";
import Footer from "../utils/Footer";

function Home() {

    const componentCards = [
        { component: <About />, key: "about" },
        { component: <ProjectList is3DView={false} />, key: "projects" },
    ];

    return (
        <div>
            <div className="flex flex-col items-center w-screen space-y-6">
                {componentCards.map(({ component, key }) => (
                    <div key={key} className="w-full max-w-4xl px-4">
                        {component}
                    </div>
                ))}
                <Footer />
            </div>
        </div>
    );
}

export default Home;
