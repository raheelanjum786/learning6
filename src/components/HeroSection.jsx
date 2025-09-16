import Typewriter from "typewriter-effect";
import hero from "../assets/hero.png";
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-row justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 my-auto">
      {/* Hero Content */}
      <div className="relative z-20 text-start w-full max-w-7xl mx-auto">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[12rem] font-extrabold mb-8 bg-gradient-to-r from-[#eee6db] via-[#efe8de] to-[#f3ede5] bg-clip-text text-transparent leading-tight">
          Sumera Sabir
        </h1>
        <div className="space-y-6">
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-[#efe8de] tracking-wider min-h-[40px] xs:min-h-[50px] sm:min-h-[60px] md:min-h-[70px] lg:min-h-[80px] xl:min-h-[100px] 2xl:min-h-[120px] flex items-center justify-start">
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
      <div>
        <img
          src={hero}
          height={10}
          width={350}
          alt="Hero"
          loading="lazy"
          className="animate-bounce"
        />
      </div>
      {/* Background Overlay for better text readability */}
      {/* <div className="absolute inset-0 pointer-events-none z-10"></div> */}
    </div>
  );
};
export default HeroSection;
