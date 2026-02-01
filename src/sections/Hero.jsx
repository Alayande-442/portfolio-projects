import Button from "../components/Button";
import { words } from "../constants/index";
import Hero3DModel from "../components/Hero3D/Hero3DModel";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

function Hero() {
    useGSAP(() => {
        gsap.fromTo(".hero-text, h1", 
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            stagger: 1,
        }
    );
    });
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background — absolutely positioned so it doesn't push content down */}
      <img
        src="/images/bg.png"
        alt="background"
        className="absolute inset-0 h-[80vh] object-contain z-0"
      />

      {/* Main two-column layout — sits above the background */}
      <div className="hero-layout relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-5 md:px-20 gap-10">

        {/* LEFT HERO SECTION */}
        <header className="flex flex-col justify-center w-full md:w-1/2">
          <div className="flex flex-col gap-5">
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
                          className="size-8 md:size-10 icon-globe-glow"
                        />
                      </div>
                    ))}
                  </div>
                </span>
              </h1>
              <h1>Into Tangible Projects</h1>
              <h1>That Drive Growth</h1>
            </div>

            <p className="text-gray-400 md:text-xl">
              I'm Alayande Olaoluwa, a Full-Stack Engineer focused on agentic AI,
              automation, and building scalable, optimized systems.
            </p>
          </div>

          {/* Buttons */}
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
        <figure className="w-full md:w-1/2 flex items-center justify-center">
          <div className="hero-3d-layout w-full max-w-[700px] mt-10">
            <Hero3DModel />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
}

export default Hero;