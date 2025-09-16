import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-[12rem] font-bold mb-8 bg-gradient-to-r from-[#eee6db] via-[#efe8de] to-[#f3ede5] bg-clip-text text-transparent">
          Sumera Sabir
        </h1>
        <div className="space-y-4">
          <div className="text-2xl md:text-7xl font-bold text-[#efe8de] tracking-wider min-h-[60px] flex items-center justify-start">
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
        </div>
      </div>

      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>
    </div>
  );
};
export default HeroSection;
