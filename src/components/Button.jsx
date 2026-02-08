function Button({ text, variant = "animated", scrollTarget, className = "" }) {
  // ─── Shared scroll handler ────────────────────────────────────────
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(scrollTarget);
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // ─── "primary" — solid blue, no animation ─────────────────────────
  if (variant === "primary") {
    return (
      <a
        href="#"
        onClick={handleClick}
        className={`btn-primary flex items-center justify-center ${className}`}
      >
        {text}
      </a>
    );
  }

  // ─── "outline" — ghost border, no animation ───────────────────────
  if (variant === "outline") {
    return (
      <a
        href="#"
        onClick={handleClick}
        className={`btn-outline flex items-center justify-center ${className}`}
      >
        {text}
      </a>
    );
  }

  // ─── "glow" — hero orb–style glowing outline CTA ──────────────────
  if (variant === "glow") {
    return (
      <a
        href="#"
        onClick={handleClick}
        className={`
          relative group flex items-center justify-center
          rounded-xl font-medium
          border border-cyan-400/30
          text-cyan-200
          bg-transparent
          transition-all duration-500
          hover:border-cyan-300
          ${className}
        `}
      >
        {/* Glow aura */}
        <span
          className="
            absolute inset-0 rounded-xl
            bg-gradient-to-br
            from-cyan-400/20 via-blue-500/20 to-violet-500/20
            opacity-60 blur-xl
            group-hover:opacity-100
            transition duration-500
            pointer-events-none
          "
        />

        {/* Inner glass layer */}
        <span
          className="
            absolute inset-0 rounded-xl
            bg-[#0b1020]/70
            backdrop-blur-md
            pointer-events-none
          "
        />

        {/* Text */}
        <span className="relative z-10">
          {text}
        </span>
      </a>
    );
  }

  // ─── "animated" (default) — existing CTA ──────────────────────────
  return (
    <a href="#" onClick={handleClick} className="cta-wrapper">
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}

export default Button;
