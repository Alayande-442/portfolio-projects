import { words } from "../constants/index";


function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <h2>Hi, I'm Olaoluwa</h2>
      <div className="absolute top-0 left-0 z-10"></div>
      <img src="/images/bg.png" alt="background" />

      <div className="hero-layout">
        {/* LEFT HERO SECTION */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming
                <span className="slide">
                  <div className="wrapper">
                    {words.map((word, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 h-[48px] md:h-[78px]"
                      >
                        {/* The Text gets the globe gradient */}
                        <span className="text-globe-gradient font-bold">
                          {word.text}
                        </span>

                        {/* The Icon gets the matching cyan glow */}
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="size-8 md:size-10 icon-globe-glow object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </span>
              </h1>
              <h1>Into Tangible Projects</h1>
              <h1>That Drive Growth</h1>
            </div>
          </div>
        </header>

        {/* RIGHT HERO SECTION */}
        <div className=""></div>
      </div>
    </section>
  );
}

export default Hero;
