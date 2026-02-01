import Hero from "./sections/Hero";
import ProjectShowCase from "./sections/ProjectShowCase";
import NavBar from "./components/NavBar";
import BrandsSection from "./components/BrandsSection";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ProjectShowCase />
        <BrandsSection />
      </div>
    </main>
  );
};

export default App;
