import Hero from "./sections/Hero";
import ProjectShowCase from "./sections/ProjectShowCase";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ProjectShowCase />
      </div>
    </main>
  );
};

export default App;
