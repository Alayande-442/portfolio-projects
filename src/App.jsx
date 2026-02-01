import Hero from "./sections/Hero";
import ProjectShowCase from "./sections/ProjectShowCase";
import NavBar from "./components/NavBar";
import BrandsSection from "./sections/BrandsSection";
import FeatureCard from "./sections/FeatureCard";
import WorkExperienceSection from "./sections/WorkExperienceSection";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ProjectShowCase />
        <BrandsSection />
        <FeatureCard />
        <WorkExperienceSection />
      </div>
    </main>
  );
};

export default App;
