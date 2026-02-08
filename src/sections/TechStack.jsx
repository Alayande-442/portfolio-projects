import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/Models/techLogos/TechIcon";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-pill",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="Tech Stack"
          sub="Here are the technologies I use to build amazing web applications"
        />

        {/* Orbit row — glowing pills */}
        <div className="tech-orbit-row">
          {techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="
                tech-pill group relative
                rounded-full px-6 py-4
                border border-white/10
                bg-gradient-to-b from-[#0b1020] to-[#070b17]
                backdrop-blur-md
                transition-all duration-500
                hover:border-cyan-400/50
                hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
              "
            >
              {/* Hover glow aura */}
              <div
                className="
                  absolute inset-0 rounded-full opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-cyan-400/15 via-blue-500/15 to-violet-500/15
                  pointer-events-none
                "
              />

              {/* Cursor-reactive inner glow */}
              <div
                className="
                  absolute inset-0 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                  pointer-events-none
                "
                style={{
                  background:
                    "radial-gradient(400px circle at center, rgba(56,189,248,0.18), transparent 60%)",
                }}
              />

              {/* 3D icon */}
              <div className="tech-pill-canvas relative z-10">
                <TechIcon model={tech} />
              </div>

              {/* Name label */}
              <span className="tech-pill-name relative z-10">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
