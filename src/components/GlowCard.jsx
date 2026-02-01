import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    cardEl.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-8 relative overflow-hidden h-full flex flex-col min-h-fit"
    >
      <div className="glow"></div>

      {/* Stars Section */}
      <div className="flex items-center gap-1 mb-5 relative z-10">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-4" />
        ))}
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Render the review text from the data automatically */}
        {card?.review && (
          <p className="text-white-50 text-base md:text-lg leading-relaxed mb-5">
            {card.review}
          </p>
        )}

        {/* Render extra stuff (like images or profiles) passed from the parent */}
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
