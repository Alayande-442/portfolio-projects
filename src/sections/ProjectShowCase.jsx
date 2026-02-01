import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowCase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

   
   useGSAP(() => {
  const projects = [
    project1Ref.current,
    project2Ref.current,
    project3Ref.current,
  ].filter(Boolean); // remove nulls

  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  gsap.fromTo(
    sectionRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );
}, []);

    return (
       <section ref={sectionRef} id="work" className="app-showcase">
  <div className="w-full">
    <div className="showcaselayout">
      
      {/* LEFT SIDE */}
      <div ref={project1Ref} className="first-project-wrapper">
        <div className="image-wrapper">
          <img src="/images/project1.png" alt="project-1" />
        </div>

        <div className="text-content">
          <h2 className="text-white text-2xl font-bold">
            Turn your resume into an interview magnet.
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            I built an AI-powered resume web application using Next.js,
            TypeScript, PostgreSQL, Shadcn UI, Tailwind, and Stripe.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div ref={project2Ref} className="project-list-wrapper flex flex-col gap-6">
        
        <div className="project">
          <div className="image-wrapper bg-[rgba(255,255,255,0.05)]">
            <img src="/images/project2.png" alt="project-2" />
          </div>
          <h2 className="text-white mt-3">Logistics Management System</h2>
        </div>

        <div ref={project3Ref} className="project">
          <div className="image-wrapper bg-[rgba(255,255,255,0.05)]">
            <img src="/images/project3.png" alt="project-3" />
          </div>
          <h2 className="text-white mt-3">Logistics Management System</h2>
        </div>

      </div>
    </div>
  </div>
</section>

    );
};

export default ProjectShowCase;