import Hero from "./sections/Hero";
import ProjectShowCase from "./sections/ProjectShowCase";
import NavBar from "./components/NavBar";
import BrandsSection from "./sections/BrandsSection";
import FeatureCard from "./sections/FeatureCard";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
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
        <TechStack />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
};

export default App;
