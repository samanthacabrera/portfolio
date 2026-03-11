import { useEffect, useState } from "react";
import Loading from "./Loading";
import Controls from "./Controls";
import About from "./About";
import ProjectList from "./ProjectList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  
      setShowContent(true); 
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  const componentCards = [
    { component: <About />, key: "about" },
    { component: <ProjectList />, key: "projects" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      <div
        className={`absolute inset-0 z-50 transition-opacity duration-1000 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Loading />
      </div>

      <div
        className={`h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Controls />

        {componentCards.map(({ component, key }) => (
          <section
            key={key}
            className="snap-start min-h-screen w-screen flex justify-center items-center"
          >
            {component}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;