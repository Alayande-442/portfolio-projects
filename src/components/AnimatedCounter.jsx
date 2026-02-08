import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Users,
  Rocket,
  TrendingUp,
} from "lucide-react";

const counterItems = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    icon: Brain,
  },
  {
    value: 200,
    suffix: "+",
    label: "Satisfied Clients",
    icon: Users,
  },
  {
    value: 108,
    suffix: "+",
    label: "Completed Projects",
    icon: Rocket,
  },
  {
    value: 90,
    suffix: "%",
    label: "Client Retention Rate",
    icon: TrendingUp,
  },
];

const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {counterItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group relative rounded-2xl p-6
              border border-white/10
              bg-gradient-to-b from-[#0b1020] to-[#070b17]
              backdrop-blur-md
              transition-all duration-500
              hover:border-cyan-400/50
              hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]
            "
          >
            {/* Glow overlay */}
            <div
              className="
                absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-cyan-400/10 via-blue-500/10 to-violet-500/10
                pointer-events-none
              "
            />

            {/* Icon */}
            <Icon
              size={26}
              className="
                mb-4 text-cyan-300
                group-hover:text-cyan-200
                transition
              "
            />

            {/* Counter */}
            <div className="text-4xl font-semibold text-cyan-300">
              {inView && (
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                />
              )}
            </div>

            {/* Label */}
            <p className="mt-2 text-sm text-white/70">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedCounter;
