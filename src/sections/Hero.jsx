import Button from "../components/Button";
import { words } from "../constants/index";
import Hero3DModel from "../components/Hero3D/Hero3DModel";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

function Hero() {
  useGSAP(() => {
    // ① Scoped to #hero so it never touches h1s elsewhere on the page
    gsap.fromTo(
      "#hero .hero-text, #hero h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
      },
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background image — sits behind everything */}
      <img
        src="/images/bg.png"
        alt="background"
        className="absolute inset-0 w-full h-[80vh] object-contain z-0"
      />

      {/* ② hero-layout owns all layout props via CSS — no duplicate utilities here */}
      <div className="hero-layout px-5 md:px-20">
        {/* LEFT — headline + description + buttons */}
        <header className="flex flex-col justify-center w-full md:w-1/2">
          <div className="flex flex-col gap-3">
            <div className="hero-text">
              <h1>
                Transforming{" "}
                <span className="slide">
                  <div className="wrapper">
                    {words.map((word, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 h-[48px] md:h-[78px]"
                      >
                        <span className="text-globe-gradient font-bold">
                          {word.text}
                        </span>
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="size-4 md:size-6 icon-globe-glow"
                        />
                      </div>
                    ))}
                  </div>
                </span>
              </h1>
              <h1>Into Tangible Projects</h1>
              <h1>That Drive Growth</h1>
            </div>

            {/* ③ text-muted utility maps to #7a8fb5 — matches the CSS token exactly */}
            <p className="text-muted md:text-xl">
              I'm Alayande Olaoluwa, a Full-Stack Engineer focused on agentic
              AI, automation, and building scalable, optimized systems.
            </p>
          </div>

          {/* ④ Two visually distinct buttons matching the screenshot */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <Button
              variant="primary"
              scrollTarget="showcase"
              className="md:w-80 md:h-16 w-60 h-12"
              text="Explore my work"
            />
           <Button
  variant="glow"
  scrollTarget="counter"
  className="md:w-80 md:h-16 w-60 h-12"
  text="Ask my portfolio"
/>
          </div>
        </header>

        {/* RIGHT — 3D model */}
        <figure className="w-full md:w-1/2 flex items-center justify-center">
          <div className="hero-3d-layout w-full max-w-[800px] mt-10">
            <Hero3DModel />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
}

export default Hero;
