import Controls from "./Controls";
import About from "./About";
import ProjectList from "./ProjectList";

function Home() {

  const componentCards = [
    { component: <About />, key: "about" },
    { component: <ProjectList />, key: "projects" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
    
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"      >
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