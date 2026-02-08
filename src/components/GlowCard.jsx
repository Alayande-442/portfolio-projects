import { useRef } from "react";

const GlowCard = ({ card, index = 0, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        group relative timeline-card
        rounded-xl p-8 h-full flex flex-col
        border border-white/10
        bg-gradient-to-b from-[#0b1020] to-[#070b17]
        backdrop-blur-md
        overflow-hidden
        transition-all duration-500
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]
      "
    >
      {/* Hover glow aura (same as AnimatedCounter) */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-cyan-400/15 via-blue-500/15 to-violet-500/15
          pointer-events-none
        "
      />

      {/* Cursor-reactive inner glow (soft, premium) */}
      <div
        className="
          absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition duration-300
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(56,189,248,0.15), transparent 40%)",
        }}
      />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5 relative z-10">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-4" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {card?.review && (
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-5">
            {card.review}
          </p>
        )}

        {children}
      </div>
    </div>
  );
};

export default GlowCard;
