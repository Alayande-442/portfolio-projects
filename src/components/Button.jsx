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

  // ─── "animated" (default) — the dark CTA with bg-circle + arrow ───
  // Used for "Learn More & Explain With AI" style buttons elsewhere.
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
