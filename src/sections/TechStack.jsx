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

        {/* Orbit row — pills + shared gradient line behind them */}
        <div className="tech-orbit-row">
          {techStackIcons.map((techStackIcon) => (
            <div key={techStackIcon.name} className="tech-pill group">
              {/* 3D icon constrained to pill size */}
              <div className="tech-pill-canvas">
                <TechIcon model={techStackIcon} />
              </div>

              {/* Name label */}
              <span className="tech-pill-name">{techStackIcon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
