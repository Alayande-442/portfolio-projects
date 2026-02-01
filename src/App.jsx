import Hero from "./sections/Hero";
import ProjectShowCase from "./sections/ProjectShowCase";
import NavBar from "./components/NavBar";
import BrandsSection from "./sections/BrandsSection";
import FeatureCard from "./sections/FeatureCard";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ProjectShowCase />
        <BrandsSection />
        <FeatureCard />
      </div>
    </main>
  );
};

export default App;
