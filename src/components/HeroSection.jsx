import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-[#eee6db] via-[#efe8de] to-[#f3ede5] bg-clip-text text-transparent">
          Sumera Sabir
        </h1>
        <div className="space-y-4">
          <div className="text-2xl md:text-4xl font-bold text-[#efe8de] tracking-wider min-h-[60px] flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  "Graphic Designer",
                  "UI/UX Designer",
                  "Digital Artist",
                  "Creative Professional",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                pauseFor: 1500,
                cursor: "|",
              }}
            />
          </div>
          <p className="text-lg md:text-xl text-[#eee6db] opacity-80 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of cursor-driven animations that bring creative
            vision to life
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#172039] to-[#1d2a49] text-[#efe8de] rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            View Portfolio
          </button>
          <button className="px-8 py-4 border-2 border-[#efe8de] text-[#efe8de] rounded-full font-semibold hover:bg-[#efe8de] hover:text-[#172039] transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>
    </div>
  );
};
export default HeroSection;
