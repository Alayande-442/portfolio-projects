import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="
            group relative rounded-xl p-8 flex flex-col gap-4
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
              absolute inset-0 rounded-xl opacity-0
              group-hover:opacity-100
              transition duration-500
              bg-gradient-to-br
              from-cyan-400/10 via-blue-500/10 to-violet-500/10
              pointer-events-none
            "
          />

          {/* Icon wrapper */}
          <div
            className="
              relative z-10 size-14 flex items-center justify-center rounded-full
              bg-cyan-400/10
              group-hover:bg-cyan-400/20
              transition
            "
          >
            <img src={imgPath} alt={title} />
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-white text-2xl font-semibold mt-2">
            {title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-white/70 text-lg">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
