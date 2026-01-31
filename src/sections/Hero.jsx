import Button from "../components/Button";
import { words } from "../constants/index";
import Hero3DModel from "../components/Hero3D/Hero3DModel";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <h2>Hi, I'm Olaoluwa</h2>
      <div className="absolute top-0 left-0 z-10"></div>
      <img src="/images/bg.png" alt="background" />
      <div className="hero-layout">
        {/* LEFT HERO SECTION */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming{" "}
                <span className="slide">
                  <div className="wrapper">
                    {words.map((word, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 h-[48px] md:h-[78px]"
                      >
                        <span className="text-globe-gradient font-bold">
                          {word.text}
                        </span>
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="size-8 md:size-10 icon-globe-glow object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </span>
              </h1>
              <h1>Into Tangible Projects</h1>
              <h1>That Drive Growth</h1>
            </div>
            <p className="text-gray-400 md:text-xl relative z-10 pointer-events-none">
              I’m Alayande Olaoluwa, a Full-Stack Engineer focused on agentic AI,
              automation, and building scalable, optimized systems.
            </p>
          </div>
          {/* Buttons container */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="Explore my work"
            />
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="Ask my portfolio"
            />
          </div>
        </header>
        {/* RIGHT HERO SECTION */}
        <figure>
          <div className="hero-3d-layout border-red-200 border-2">
            <Hero3DModel />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;