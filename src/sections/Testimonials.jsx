import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full max-w-7xl md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        {/* Using GRID ensures all cards in a row have the same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              {/* Review Text - Using 'flex-1' to push the profile to the bottom */}
              <div className="flex-1">
                <p className="text-white-50 text-base leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Profile Section - Now perfectly nested at the bottom */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={testimonial.imgPath}
                  alt={testimonial.name}
                  className="size-10 rounded-full object-cover border border-white/20"
                />
                <div className="flex flex-col">
                  <p className="font-bold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-purple-400">
                    {testimonial.mentions}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
