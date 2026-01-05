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
        }, 4000); 

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
<>
  <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    
    <Controls />

    {componentCards.map(({ component, key }) => (
      <section
        key={key}
        className="snap-start h-screen w-screen flex justify-center items-center"
      >
        {component}
      </section>
    ))}

      <p className="text-sm text-center -translate-y-full mb-1">
        Made with love by
        <a
          href="https://github.com/samanthacabrera"
          target="_blank"
          rel="noopener noreferrer"
          className="pl-2 hover:italic transition"
        >
          Sam Cabrera
        </a>
      </p>
  </div>
</>

    );
}

export default Home;
